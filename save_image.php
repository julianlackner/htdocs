<?php
// Fehlerberichterstattung aktivieren
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['image']) && isset($_POST['imageName'])) {
    // Zielverzeichnis
    $targetDir = 'C:/xampp/htdocs/fotobox/images/';

    // Überprüfen, ob das Verzeichnis existiert
    if (!is_dir($targetDir)) {
        die("Fehler: Zielverzeichnis existiert nicht.");
    }

    // Bilddaten und Name
    $imageData = $_POST['image'];
    $imageName = $_POST['imageName'];

    // Entferne den Base64-Header
    $imageData = substr($imageData, strpos($imageData, ",") + 1);

    // Speichern des Bildes
    $targetFile = $targetDir . $imageName;

    if (file_put_contents($targetFile, base64_decode($imageData))) {
        echo "Das Bild wurde erfolgreich gespeichert: " . $imageName;
    } else {
        echo "Fehler beim Speichern des Bildes.";
    }
} else {
    echo "Ungültige Anfrage oder fehlende Parameter.";
}
?>
