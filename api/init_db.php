<?php
require_once 'db.php';

try {
    // Create settings table
    $pdo->exec("CREATE TABLE IF NOT EXISTS site_settings (
        setting_key VARCHAR(100) PRIMARY KEY,
        setting_value TEXT NOT NULL
    )");

    // Create admin users table
    $pdo->exec("CREATE TABLE IF NOT EXISTS admin_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL
    )");

    // Insert default settings if not exists
    $settings = [
        'site_name' => 'APEX BANK',
        'online_banking_link' => '#',
        'contact_email' => 'support@apexbank.com',
        'customer_service_link' => '/contact-us',
        'locations_link' => '/locations',
        'header_alert_text' => 'Hi! Looking for our European site? Visit apexbank.eu',
        'header_alert_link' => '#',
        'contact_receiver_email' => 'admin@apexbank.com',
        'live_chat_property_id' => '',
        'smtp_host' => '',
        'smtp_port' => '587',
        'smtp_user' => '',
        'smtp_pass' => '',
        'smtp_encryption' => 'tls',
        'meta_description' => 'Experience premium banking with Apex Bank. Checking, Savings, Credit Cards, and Wealth Management services tailored to your needs.',
        'meta_keywords' => 'banking, finance, checking, savings, credit cards, wealth management, loans',
        'og_image' => '',
        'seo_rating_value' => '4.9',
        'seo_review_count' => '9758',
        'bank_phone' => '1-800-555-0199',
        'bank_address_1' => '123 Financial District Blvd',
        'bank_address_2' => 'New York, NY 10005',
        'custom_js_script' => ''
    ];

    foreach ($settings as $key => $value) {
        $stmt = $pdo->prepare("INSERT IGNORE INTO site_settings (setting_key, setting_value) VALUES (?, ?)");
        $stmt->execute([$key, $value]);
    }

    // Insert default admin user if count is 0
    $count = $pdo->query("SELECT COUNT(*) FROM admin_users")->fetchColumn();
    if ($count == 0) {
        $username = 'admin';
        $password = 'admin123';
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO admin_users (username, password_hash) VALUES (?, ?)");
        $stmt->execute([$username, $hash]);
    }

    echo "Database initialized successfully.\n";
} catch (Exception $e) {
    echo "Error initializing database: " . $e->getMessage() . "\n";
}
?>