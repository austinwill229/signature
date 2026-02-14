<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$offers = [
    [
        'id' => 1,
        'title' => 'Apex Sapphire Preferred®',
        'subtitle' => 'Earn 80,000 bonus points',
        'description' => 'Plus, earn 5x total points on Apex Travel℠, 3x points on dining, and 2x points on all other travel purchases. Terms apply.',
        'image' => 'https://picsum.photos/id/1/600/400',
        'icon' => 'fa-regular fa-credit-card',
        'bg_color' => 'bg-blue-950/40',
        'button_text' => 'See details'
    ],
    [
        'id' => 2,
        'title' => 'Home Lending',
        'subtitle' => 'Guaranteed on-time closing or get $5,000',
        'description' => 'We promise an on-time closing for eligible products in as soon as three weeks or you\'ll get $5,000, if you qualify.',
        'image' => 'https://picsum.photos/id/351/600/400',
        'icon' => 'fa-solid fa-house',
        'bg_color' => 'bg-blue-700/40',
        'button_text' => 'Get started'
    ],
    [
        'id' => 3,
        'title' => 'Apex Freedom Unlimited®',
        'subtitle' => 'Earn a $250 bonus',
        'description' => 'Plus, earn unlimited 1.5% cash back or more on all purchases, including 3% on dining and drugstores — all with no annual fee.',
        'image' => 'https://picsum.photos/id/326/600/400',
        'icon' => 'fa-regular fa-credit-card',
        'bg_color' => 'bg-blue-50/30', // Adjusted from blue-500/40 for better contrast in PHP array if needed, but original was blue-500/40
        'button_text' => 'Learn more'
    ]
];

// Correcting bg_color for card 3 to match original frontend
$offers[2]['bg_color'] = 'bg-blue-500/40';

echo json_encode($offers);
