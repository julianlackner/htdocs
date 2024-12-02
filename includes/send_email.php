<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // CSRF-Token überprüfen
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die("Ungültiges CSRF-Token.");
    }

    // Honeypot-Feld überprüfen (sollte leer sein)
    if (!empty($_POST['phone'])) {
        die("Spam erkannt.");
    }

    // Empfängeradresse
    $to = "ju.lackner@gmx.net"; // Ersetze dies mit deiner gewünschten E-Mail-Adresse

    // Formulardaten abrufen
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // Betreff der E-Mail
    $subject = "Neue Nachricht vom Kontaktformular";

    // Nachricht
    $email_body = "Name: $name\n";
    $email_body .= "E-Mail: $email\n\n";
    $email_body .= "Nachricht:\n$message\n";

    // E-Mail-Header
    $headers = "Von: $email\r\n";
    $headers .= "Antwort an: $email\r\n";

    // E-Mail senden
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Die Nachricht wurde erfolgreich gesendet.";
    } else {
        echo "Es gab ein Problem beim Senden der Nachricht.";
    }
} else {
    echo "Ungültige Anforderung.";
}
?>
