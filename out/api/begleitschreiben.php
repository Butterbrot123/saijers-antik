<?php
require_once __DIR__ . "/mail-helpers.php";

if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") {
    sa_json(405, ["message" => "Diese Anfrage ist nicht erlaubt."]);
}

$payload = json_decode(file_get_contents("php://input"), true);
if (!is_array($payload)) {
    sa_json(400, ["message" => "Die Formulardaten konnten nicht gelesen werden."]);
}

$rawForm = is_array($payload["form"] ?? null) ? $payload["form"] : [];
$rawItems = is_array($payload["items"] ?? null) ? array_slice($payload["items"], 0, 12) : [];

$form = [
    "company" => sa_clean($rawForm["company"] ?? "", 160),
    "name" => sa_clean($rawForm["name"] ?? "", 160),
    "street" => sa_clean($rawForm["street"] ?? "", 160),
    "postalCode" => sa_clean($rawForm["postalCode"] ?? "", 24),
    "city" => sa_clean($rawForm["city"] ?? "", 120),
    "phone" => sa_clean($rawForm["phone"] ?? "", 80),
    "email" => strtolower(sa_clean($rawForm["email"] ?? "", 180)),
    "taxMode" => ($rawForm["taxMode"] ?? "") === "gewerblich" ? "gewerblich" : "privat",
    "taxNumber" => sa_clean($rawForm["taxNumber"] ?? "", 120),
    "comment" => sa_clean_text($rawForm["comment"] ?? "", 2000),
    "bank" => sa_clean($rawForm["bank"] ?? "", 160),
    "iban" => sa_clean($rawForm["iban"] ?? "", 80),
    "bic" => sa_clean($rawForm["bic"] ?? "", 80),
    "accountHolder" => sa_clean($rawForm["accountHolder"] ?? "", 160),
    "place" => sa_clean($rawForm["place"] ?? "", 120),
    "date" => sa_clean($rawForm["date"] ?? "", 40),
    "declarationAccepted" => !empty($rawForm["declarationAccepted"])
];

$items = [];
foreach ($rawItems as $index => $item) {
    if (!is_array($item)) {
        continue;
    }

    $items[] = [
        "id" => sa_clean((string) ($item["id"] ?? ($index + 1)), 60),
        "material" => sa_clean($item["material"] ?? "", 180),
        "quantity" => sa_clean($item["quantity"] ?? "", 80),
        "unit" => sa_clean($item["unit"] ?? "Stück", 60) ?: "Stück",
        "description" => sa_clean($item["description"] ?? "", 500)
    ];
}

if (empty($items)) {
    $items[] = [
        "id" => "1",
        "material" => "",
        "quantity" => "",
        "unit" => "Stück",
        "description" => ""
    ];
}

$fieldErrors = [];

if ($form["name"] === "") {
    $fieldErrors["name"] = "Bitte Namen eintragen.";
}
if ($form["street"] === "") {
    $fieldErrors["street"] = "Bitte Straße eintragen.";
}
if ($form["postalCode"] === "") {
    $fieldErrors["postalCode"] = "Bitte PLZ eintragen.";
}
if ($form["city"] === "") {
    $fieldErrors["city"] = "Bitte Ort eintragen.";
}
if ($form["email"] === "") {
    $fieldErrors["email"] = "Für den automatischen Versand wird eine E-Mail-Adresse benötigt.";
} elseif (!sa_is_email($form["email"])) {
    $fieldErrors["email"] = "Bitte eine gültige E-Mail-Adresse eintragen.";
}
if ($form["taxMode"] === "gewerblich" && $form["taxNumber"] === "") {
    $fieldErrors["taxNumber"] = "Bitte Steuernummer eintragen.";
}
if (!$form["declarationAccepted"]) {
    $fieldErrors["declarationAccepted"] = "Bitte die Erklärung bestätigen.";
}
if ($form["date"] === "") {
    $fieldErrors["date"] = "Bitte Datum eintragen.";
}
if ($form["place"] === "") {
    $fieldErrors["place"] = "Bitte Ort eintragen.";
}

$sendItems = [];
foreach ($items as $index => $item) {
    $isRequired = $index === 0 || $item["material"] !== "" || $item["quantity"] !== "" || $item["description"] !== "";
    if (!$isRequired) {
        continue;
    }

    if ($item["material"] === "") {
        $fieldErrors["item-" . $item["id"] . "-material"] = "Bitte Kategorie auswählen.";
    }
    if ($item["description"] === "") {
        $fieldErrors["item-" . $item["id"] . "-description"] = "Bitte kurz beschreiben, was in der Sendung ist.";
    }

    if ($item["material"] !== "" || $item["description"] !== "") {
        $sendItems[] = $item;
    }
}

if (!empty($fieldErrors)) {
    sa_json(400, [
        "message" => "Bitte prüfen Sie die markierten Felder.",
        "fieldErrors" => $fieldErrors
    ]);
}

function sa_items_text($items) {
    $lines = [];

    foreach ($items as $index => $item) {
        $quantity = $item["quantity"] !== "" ? $item["quantity"] . " " . $item["unit"] : "-";
        $lines[] = implode("\n", [
            ($index + 1) . ". " . $item["material"],
            "   Menge: " . $quantity,
            "   Beschreibung: " . $item["description"]
        ]);
    }

    return implode("\n\n", $lines);
}

function sa_bank_text($form) {
    if ($form["bank"] === "" && $form["accountHolder"] === "" && $form["iban"] === "" && $form["bic"] === "") {
        return "";
    }

    return implode("\n", [
        "Konto-Angaben:",
        "Bank: " . ($form["bank"] ?: "-"),
        "Kontoinhaber: " . ($form["accountHolder"] ?: "-"),
        "IBAN: " . ($form["iban"] ?: "-"),
        "BIC: " . ($form["bic"] ?: "-")
    ]);
}

$caseNumber = sa_case_number("SA");
$itemText = sa_items_text($sendItems);
$bankText = sa_bank_text($form);
$status = $form["taxMode"] === "privat" ? "Privat" : "Gewerblich";

$internalText = implode("\n", array_filter([
    "Neue Begleitschreiben-Anfrage: " . $caseNumber,
    "",
    "Absender:",
    "Firma: " . ($form["company"] ?: "-"),
    "Name: " . $form["name"],
    "Adresse: " . $form["street"] . ", " . $form["postalCode"] . " " . $form["city"],
    "Telefon: " . ($form["phone"] ?: "-"),
    "E-Mail: " . $form["email"],
    "Status: " . $status,
    $form["taxNumber"] ? "Steuernummer: " . $form["taxNumber"] : "",
    "",
    "Inhalt der Sendung:",
    $itemText,
    "",
    $form["comment"] ? "Kommentar:\n" . $form["comment"] : "",
    $bankText,
    "",
    "Datum / Ort: " . $form["date"] . " / " . $form["place"],
    "Erklärung wurde im Formular bestätigt."
], function ($line) {
    return $line !== "";
}));

$customerText = implode("\n", array_filter([
    "Vielen Dank für Ihr Begleitschreiben an Saijers Antik.",
    "Ihre Vorgangsnummer lautet: " . $caseNumber,
    "",
    "Bitte drucken Sie das Begleitschreiben zusätzlich aus, unterschreiben Sie es und legen Sie es in die Sendung.",
    "",
    "Ihre Angaben:",
    "Name: " . $form["name"],
    "Adresse: " . $form["street"] . ", " . $form["postalCode"] . " " . $form["city"],
    "Telefon: " . ($form["phone"] ?: "-"),
    "E-Mail: " . $form["email"],
    "Status: " . $status,
    "",
    "Inhalt der Sendung:",
    $itemText,
    "",
    $form["comment"] ? "Kommentar:\n" . $form["comment"] : "",
    $bankText,
    "",
    "Sobald Ihre Sendung bei uns eingetroffen ist, prüfen wir die Stücke und melden uns mit einer Rückmeldung oder einem Angebot.",
    "",
    SAIJERS_ADDRESS
], function ($line) {
    return $line !== "";
}));

$sentInternal = sa_send_mail(
    SAIJERS_OWNER_EMAIL,
    "Neue Sendung " . $caseNumber . " - " . $form["name"],
    $internalText,
    $form["email"]
);

if (!$sentInternal) {
    sa_json(502, [
        "message" => "Das Begleitschreiben konnte gerade nicht per E-Mail gesendet werden."
    ]);
}

$sentCustomer = sa_send_mail(
    $form["email"],
    "Begleitschreiben " . $caseNumber . " - Saijers Antik",
    $customerText,
    SAIJERS_OWNER_EMAIL
);

if (!$sentCustomer) {
    sa_json(502, [
        "message" => "Die Bestätigung an den Kunden konnte gerade nicht gesendet werden."
    ]);
}

sa_json(200, [
    "caseNumber" => $caseNumber,
    "message" => "Das Begleitschreiben wurde übermittelt. Sie erhalten eine Bestätigung per E-Mail."
]);
