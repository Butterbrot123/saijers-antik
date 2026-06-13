<?php
require_once __DIR__ . "/mail-helpers.php";

if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") {
    sa_json(405, ["message" => "Diese Anfrage ist nicht erlaubt."]);
}

$form = [
    "name" => sa_clean($_POST["name"] ?? "", 160),
    "email" => strtolower(sa_clean($_POST["email"] ?? "", 180)),
    "phone" => sa_clean($_POST["phone"] ?? "", 80),
    "topic" => sa_clean($_POST["topic"] ?? "Kontaktanfrage", 160),
    "message" => sa_clean_text($_POST["message"] ?? "", 2500)
];

$fieldErrors = [];

if ($form["name"] === "") {
    $fieldErrors["name"] = "Bitte Namen eintragen.";
}

if ($form["email"] === "") {
    $fieldErrors["email"] = "Bitte E-Mail-Adresse eintragen.";
} elseif (!sa_is_email($form["email"])) {
    $fieldErrors["email"] = "Bitte eine gültige E-Mail-Adresse eintragen.";
}

if ($form["message"] === "") {
    $fieldErrors["message"] = "Bitte kurz beschreiben, worum es geht.";
}

[$attachments, $uploadError] = sa_collect_uploaded_images("images");
if ($uploadError !== "") {
    $fieldErrors["images"] = $uploadError;
}

if (!empty($fieldErrors)) {
    sa_json(400, [
        "message" => "Bitte prüfen Sie die markierten Felder.",
        "fieldErrors" => $fieldErrors
    ]);
}

$caseNumber = sa_case_number("SA-K");
$imageLines = empty($attachments)
    ? "Keine Bilder hochgeladen."
    : implode("\n", array_map(
        function ($file, $index) {
            return ($index + 1) . ". " . $file["name"] . " (" . sa_format_bytes((int) $file["size"]) . ")";
        },
        $attachments,
        array_keys($attachments)
    ));

$internalText = implode("\n", [
    "Neue Kontaktanfrage: " . $caseNumber,
    "",
    "Name: " . $form["name"],
    "E-Mail: " . $form["email"],
    "Telefon: " . ($form["phone"] ?: "-"),
    "Thema: " . $form["topic"],
    "",
    "Nachricht:",
    $form["message"],
    "",
    "Bilder:",
    $imageLines
]);

$customerText = implode("\n", [
    "Vielen Dank für Ihre Anfrage an Saijers Antik.",
    "Ihre Vorgangsnummer lautet: " . $caseNumber,
    "",
    "Thema: " . $form["topic"],
    empty($attachments)
        ? "Sie haben keine Bilder hochgeladen."
        : count($attachments) . " Bild(er) wurden mit Ihrer Anfrage übermittelt.",
    "",
    "Wir prüfen Ihre Angaben und melden uns persönlich bei Ihnen.",
    "",
    SAIJERS_ADDRESS
]);

$sentInternal = sa_send_mail(
    SAIJERS_OWNER_EMAIL,
    "Neue Kontaktanfrage " . $caseNumber . " - " . $form["name"],
    $internalText,
    $form["email"],
    $attachments
);

if (!$sentInternal) {
    sa_json(502, [
        "message" => "Die Anfrage konnte gerade nicht per E-Mail gesendet werden."
    ]);
}

sa_send_mail(
    $form["email"],
    "Ihre Anfrage " . $caseNumber . " - Saijers Antik",
    $customerText,
    SAIJERS_OWNER_EMAIL
);

sa_json(200, [
    "caseNumber" => $caseNumber,
    "message" => "Ihre Anfrage wurde gesendet. Ihre Vorgangsnummer lautet " . $caseNumber . "."
]);
