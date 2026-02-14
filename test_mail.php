<?php
require_once 'api/db.php';
require_once 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

echo "Starting email test...\n";

try {
    // Get receiver email from settings
    $stmt = $pdo->prepare("SELECT setting_value FROM site_settings WHERE setting_key = 'contact_receiver_email'");
    $stmt->execute();
    $receiver_email = $stmt->fetchColumn();
    echo "Receiver Email: " . ($receiver_email ?: 'Not set (using default)') . "\n";
    $receiver_email = $receiver_email ?: 'admin@apexbank.com';

    $mail = new PHPMailer(true);

    // Enable verbose debug output
    $mail->SMTPDebug = 2; // 2 = Client and server messages
    $mail->Debugoutput = function ($str, $level) {
        echo "debug level $level; message: $str\n";
    };

    // Use mail() function for now (as per contact.php)
    $mail->isMail();

    $mail->setFrom('test@example.com', 'Test Script');
    $mail->addAddress($receiver_email);
    $mail->Subject = 'Test Email from Apex Bank Debugger';
    $mail->Body = 'This is a test email to verify PHP mail configuration.';

    if ($mail->send()) {
        echo "Message has been sent successfully.\n";
    } else {
        echo "Message could not be sent.\n";
    }
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}\n";
}
?>