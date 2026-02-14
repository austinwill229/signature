<?php
header('Content-Type: application/json');
require_once 'db.php';
require_once '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$topic = isset($data['topic']) ? htmlspecialchars($data['topic']) : 'General';
$message = nl2br(htmlspecialchars($data['message']));

try {
    // Get receiver email from settings
    $stmt = $pdo->prepare("SELECT setting_value FROM site_settings WHERE setting_key = 'contact_receiver_email'");
    $stmt->execute();
    $receiver_email = $stmt->fetchColumn() ?: 'admin@apexbank.com';

    // Get site name for the subject
    $stmt = $pdo->prepare("SELECT setting_value FROM site_settings WHERE setting_key = 'site_name'");
    $stmt->execute();
    $site_name = $stmt->fetchColumn() ?: 'Apex Bank';

    // Get SMTP settings
    $smtp_settings = [];
    $keys = ['smtp_host', 'smtp_port', 'smtp_user', 'smtp_pass', 'smtp_encryption'];
    foreach ($keys as $key) {
        $stmt = $pdo->prepare("SELECT setting_value FROM site_settings WHERE setting_key = ?");
        $stmt->execute([$key]);
        $smtp_settings[$key] = $stmt->fetchColumn();
    }

    $mail = new PHPMailer(true);

    if (!empty($smtp_settings['smtp_host'])) {
        $mail->isSMTP();
        $mail->Host = $smtp_settings['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_settings['smtp_user'];
        $mail->Password = $smtp_settings['smtp_pass'];
        $mail->SMTPSecure = $smtp_settings['smtp_encryption']; // 'tls' or 'ssl'
        $mail->Port = $smtp_settings['smtp_port'];
    } else {
        // Fallback to mail() if no SMTP host configured
        $mail->isMail();
    }

    // Recipients
    $mail->setFrom($smtp_settings['smtp_user'] ?: 'system@apexbank.com', $site_name);
    $mail->addAddress($receiver_email);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Inquiry: $topic - $site_name";

    $body = "<h2>$topic Inquiry from $site_name</h2>";
    $body .= "<p><strong>Name:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Topic:</strong> $topic</p>";
    $body .= "<p><strong>Message:</strong><br>$message</p>";

    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace('<br>', "\n", $body));

    // Log email to file for debugging
    $logDir = __DIR__ . '/emails';
    if (!is_dir($logDir)) {
        mkdir($logDir, 0777, true);
    }
    $logFile = $logDir . '/email_' . date('Y-m-d_H-i-s') . '.html';
    file_put_contents($logFile, $body);

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Message sent successfully (and logged to api/emails/)']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Mailer Error: {$mail->ErrorInfo}"]);
}
?>