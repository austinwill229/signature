<?php
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// In a real app, you would check session here. 
// For this demo, we can skip session check if needed or implement it.
// if (!isset($_SESSION['admin_id'])) {
//     header('HTTP/1.1 401 Unauthorized');
//     echo json_encode(['error' => 'Unauthorized']);
//     exit;
// }

require_once '../db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !is_array($data)) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

try {
    $pdo->beginTransaction();
    foreach ($data as $key => $value) {
        $stmt = $pdo->prepare("INSERT INTO site_settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?");
        $stmt->execute([$key, $value, $value]);
    }
    $pdo->commit();
    echo json_encode(['success' => true, 'message' => 'Settings updated successfully']);
} catch (Exception $e) {
    $pdo->rollBack();
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => $e->getMessage()]);
}
?>