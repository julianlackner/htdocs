<?php
header('Content-Type: application/json');

$directory = 'images'; // Verzeichnis mit den Bildern
$allowed_extensions = ['jpg', 'jpeg', 'png', 'gif']; // Erlaubte Dateitypen

try {
    // Überprüfen, ob das Verzeichnis existiert
    if (!is_dir($directory)) {
        throw new Exception('Das Bilderverzeichnis existiert nicht.');
    }

    // Alle Dateien im Verzeichnis lesen
    $files = array_diff(scandir($directory), ['.', '..']);
    $images = [];

    foreach ($files as $file) {
        $file_path = $directory . '/' . $file;
        $file_extension = pathinfo($file_path, PATHINFO_EXTENSION);

        // Überprüfen, ob die Datei eine gültige Bilddatei ist
        if (is_file($file_path) && in_array(strtolower($file_extension), $allowed_extensions)) {
            $images[] = $file;
        }
    }

    // Bildnamen als JSON zurückgeben
    echo json_encode($images);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
