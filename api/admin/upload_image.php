<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$target_dir = "../uploads/";
if (!is_dir($target_dir)) {
    mkdir($target_dir, 0777, true);
}

if (!isset($_FILES["file"])) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['success' => false, 'message' => 'No file uploaded']);
    exit;
}

$file = $_FILES["file"];
$imageFileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
$target_file = $target_dir . uniqid() . "." . $imageFileType;

// Check if image file is a actual image or fake image
$check = getimagesize($file["tmp_name"]);
if ($check === false) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['success' => false, 'message' => 'File is not an image.']);
    exit;
}

// Allow certain file formats
if (
    $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" && $imageFileType != "ico" && $imageFileType != "svg"
) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['success' => false, 'message' => 'Sorry, only JPG, JPEG, PNG, GIF, ICO & SVG files are allowed.']);
    exit;
}

if (move_uploaded_file($file["tmp_name"], $target_file)) {
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
    $host = $_SERVER['HTTP_HOST'];
    $url = $protocol . "://" . $host . "/api/uploads/" . basename($target_file);
    echo json_encode(['success' => true, 'url' => $url]);
} else {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error uploading your file.']);
}
?>