<?php
if (basename($_SERVER["SCRIPT_FILENAME"] ?? "") === basename(__FILE__)) {
    http_response_code(404);
    exit;
}

const SAIJERS_OWNER_EMAIL = "inessayers@googlemail.com";
const SAIJERS_FROM_EMAIL = "kontakt@saijersantik.de";
const SAIJERS_FROM_NAME = "Saijers Antik";
const SAIJERS_ADDRESS = "Saijers Antik / Antikladen Kappeln\nQuerstraße 4\n24376 Kappeln";

function sa_json($status, $payload) {
    http_response_code($status);
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function sa_clean($value, $maxLength = 500) {
    if (!is_string($value)) {
        return "";
    }

    $value = preg_replace("/\s+/u", " ", trim($value));
    return sa_substr($value, $maxLength);
}

function sa_clean_text($value, $maxLength = 2500) {
    if (!is_string($value)) {
        return "";
    }

    return sa_substr(trim($value), $maxLength);
}

function sa_substr($value, $maxLength) {
    if (function_exists("mb_substr")) {
        return mb_substr($value, 0, $maxLength, "UTF-8");
    }

    return substr($value, 0, $maxLength);
}

function sa_is_email($value) {
    return is_string($value) && filter_var($value, FILTER_VALIDATE_EMAIL);
}

function sa_case_number($prefix) {
    $date = date("Ymd");
    $random = strtoupper(substr(sa_random_hex(4), 0, 6));
    return $prefix . "-" . $date . "-" . $random;
}

function sa_random_hex($bytes) {
    if (function_exists("random_bytes")) {
        return bin2hex(random_bytes($bytes));
    }

    return dechex(mt_rand(0, PHP_INT_MAX)) . dechex(mt_rand(0, PHP_INT_MAX));
}

function sa_encode_header($value) {
    return "=?UTF-8?B?" . base64_encode($value) . "?=";
}

function sa_safe_email($email, $fallback = SAIJERS_OWNER_EMAIL) {
    return sa_is_email($email) ? $email : $fallback;
}

function sa_format_bytes($bytes) {
    if ($bytes >= 1024 * 1024) {
        return number_format($bytes / 1024 / 1024, 1, ",", ".") . " MB";
    }

    if ($bytes >= 1024) {
        return round($bytes / 1024) . " KB";
    }

    return $bytes . " B";
}

function sa_safe_filename($name, $fallback) {
    $name = basename((string) $name);
    $name = preg_replace("/[^\pL\pN._ -]/u", "-", $name);
    $name = preg_replace("/-+/u", "-", $name);
    $name = trim($name, " .-");

    return $name !== "" ? $name : $fallback;
}

function sa_send_mail($to, $subject, $text, $replyTo = "", $attachments = []) {
    $to = sa_safe_email($to);
    $replyTo = sa_safe_email($replyTo, SAIJERS_OWNER_EMAIL);
    $subject = sa_encode_header($subject);
    $headers = [
        "From: " . sa_encode_header(SAIJERS_FROM_NAME) . " <" . SAIJERS_FROM_EMAIL . ">",
        "Reply-To: " . $replyTo,
        "MIME-Version: 1.0"
    ];

    if (!empty($attachments)) {
        $boundary = "saijers-" . sa_random_hex(12);
        $headers[] = "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"";

        $message = "--" . $boundary . "\r\n";
        $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $message .= $text . "\r\n\r\n";

        foreach ($attachments as $attachment) {
            $filename = sa_safe_filename($attachment["name"] ?? "", "bild.jpg");
            $mime = $attachment["type"] ?? "application/octet-stream";
            $content = file_get_contents($attachment["tmp_name"]);

            if ($content === false) {
                continue;
            }

            $message .= "--" . $boundary . "\r\n";
            $message .= "Content-Type: " . $mime . "; name=\"" . addslashes($filename) . "\"\r\n";
            $message .= "Content-Disposition: attachment; filename=\"" . addslashes($filename) . "\"\r\n";
            $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $message .= chunk_split(base64_encode($content)) . "\r\n";
        }

        $message .= "--" . $boundary . "--";
    } else {
        $headers[] = "Content-Type: text/plain; charset=UTF-8";
        $headers[] = "Content-Transfer-Encoding: 8bit";
        $message = $text;
    }

    return mail($to, $subject, $message, implode("\r\n", $headers), "-f" . SAIJERS_FROM_EMAIL);
}

function sa_collect_uploaded_images($fieldName = "images") {
    if (!isset($_FILES[$fieldName])) {
        return [[], ""];
    }

    $raw = $_FILES[$fieldName];
    $names = is_array($raw["name"]) ? $raw["name"] : [$raw["name"]];
    $types = is_array($raw["type"]) ? $raw["type"] : [$raw["type"]];
    $tmpNames = is_array($raw["tmp_name"]) ? $raw["tmp_name"] : [$raw["tmp_name"]];
    $errors = is_array($raw["error"]) ? $raw["error"] : [$raw["error"]];
    $sizes = is_array($raw["size"]) ? $raw["size"] : [$raw["size"]];

    $allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];
    $allowedExtensions = ["jpg", "jpeg", "png", "webp", "heic", "heif"];
    $maxFiles = 6;
    $maxFileSize = 8 * 1024 * 1024;
    $maxTotalSize = 20 * 1024 * 1024;
    $attachments = [];
    $totalSize = 0;

    foreach ($names as $index => $name) {
        $error = $errors[$index] ?? UPLOAD_ERR_NO_FILE;
        if ($error === UPLOAD_ERR_NO_FILE) {
            continue;
        }

        if ($error !== UPLOAD_ERR_OK) {
            return [[], "Ein Bild konnte nicht hochgeladen werden."];
        }

        $size = (int) ($sizes[$index] ?? 0);
        $totalSize += $size;

        if (count($attachments) >= $maxFiles) {
            return [[], "Bitte maximal " . $maxFiles . " Bilder hochladen."];
        }

        if ($size > $maxFileSize) {
            return [[], "Ein Bild ist zu groß. Bitte maximal " . sa_format_bytes($maxFileSize) . " pro Bild hochladen."];
        }

        if ($totalSize > $maxTotalSize) {
            return [[], "Die Bilder sind zusammen zu groß. Bitte maximal " . sa_format_bytes($maxTotalSize) . " hochladen."];
        }

        $tmpName = $tmpNames[$index] ?? "";
        $mime = function_exists("mime_content_type") ? mime_content_type($tmpName) : ($types[$index] ?? "");
        $extension = strtolower(pathinfo((string) $name, PATHINFO_EXTENSION));

        if (!in_array($mime, $allowedTypes, true) && !in_array($extension, $allowedExtensions, true)) {
            return [[], "Bitte nur Bilder im Format JPG, PNG, WebP, HEIC oder HEIF hochladen."];
        }

        $attachments[] = [
            "name" => sa_safe_filename($name, "bild-" . ($index + 1) . ".jpg"),
            "type" => in_array($mime, $allowedTypes, true) ? $mime : ($types[$index] ?? "application/octet-stream"),
            "tmp_name" => $tmpName,
            "size" => $size
        ];
    }

    return [$attachments, ""];
}
