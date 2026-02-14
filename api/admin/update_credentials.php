<?php
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Simple session check (since we are not using a robust auth system)
if (!isset($_SESSION['admin_id'])) {
    header('HTTP/1.1 401 Unauthorized');
    echo json_encode(['error' => 'Authentication required']);
    exit;
}

require_once '../db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['currentPassword']) || (!isset($data['newUsername']) && !isset($data['newPassword']))) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

try {
    // 1. Verify current password
    $stmt = $pdo->prepare("SELECT password_hash FROM admin_users WHERE id = ?");
    $stmt->execute([$_SESSION['admin_id']]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($data['currentPassword'], $user['password_hash'])) {
        header('HTTP/1.1 401 Unauthorized');
        echo json_encode(['error' => 'Incorrect current password']);
        exit;
    }

    // 2. Prepare update
    $updates = [];
    $params = [];

    if (!empty($data['newUsername'])) {
        $updates[] = "username = ?";
        $params[] = $data['newUsername'];
    }

    if (!empty($data['newPassword'])) {
        $updates[] = "password_hash = ?";
        $params[] = password_hash($data['newPassword'], PASSWORD_DEFAULT);
    }

    if (empty($updates)) {
        echo json_encode(['success' => true, 'message' => 'No changes provided']);
        exit;
    }

    $params[] = $_SESSION['admin_id'];
    $sql = "UPDATE admin_users SET " . implode(', ', $updates) . " WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo json_encode(['success' => true, 'message' => 'Credentials updated successfully']);

} catch (Exception $e) {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => $e->getMessage()]);
}
?>