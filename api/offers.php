<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
require_once 'db.php';

try {
    // Fetch site name from database
    $stmt = $pdo->prepare("SELECT setting_value FROM site_settings WHERE setting_key = 'site_name'");
    $stmt->execute();
    $site_name = $stmt->fetchColumn() ?: 'Apex Bank';
    // Remove "Bank" if it's already in the name for titles like "[Bank Name] Elite Rewards"
    $base_name = str_ireplace(' Bank', '', $site_name);

    $offers = [
        [
            'id' => 1,
            'title' => $base_name . ' Elite Rewards',
            'subtitle' => 'Earn 80,000 bonus points',
            'description' => "Plus, earn 5x total points on $base_name Travel℠, 3x points on dining, and 2x points on all other travel purchases. Terms apply.",
            'image' => 'https://picsum.photos/id/1/600/400',
            'icon' => 'fa-regular fa-credit-card',
            'bg_color' => 'bg-blue-950/40',
            'button_text' => 'See details',
            'link' => '/credit-cards'
        ],
        [
            'id' => 2,
            'title' => 'Home Lending',
            'subtitle' => 'Guaranteed on-time closing or get $5,000',
            'description' => 'We promise an on-time closing for eligible products in as soon as three weeks or you\'ll get $5,000, if you qualify.',
            'image' => 'https://picsum.photos/id/351/600/400',
            'icon' => 'fa-solid fa-house',
            'bg_color' => 'bg-blue-700/40',
            'button_text' => 'Get started',
            'link' => '/mortgage'
        ],
        [
            'id' => 3,
            'title' => $base_name . ' Cashback Pro',
            'subtitle' => 'Earn a $250 bonus',
            'description' => "Plus, earn unlimited 1.5% cash back or more on all purchases, including 3% on dining and drugstores — all with no annual fee.",
            'image' => 'https://picsum.photos/id/326/600/400',
            'icon' => 'fa-regular fa-credit-card',
            'bg_color' => 'bg-blue-500/40',
            'button_text' => 'Learn more',
            'link' => '/credit-cards'
        ]
    ];

    echo json_encode($offers);
} catch (Exception $e) {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => $e->getMessage()]);
}
