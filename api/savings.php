<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$savings_data = [
    'featured' => [
        'title' => 'Apex Relationship Savings℠',
        'apy' => '4.50%',
        'detail' => 'On balances of $25,000 or more',
        'description' => 'Enjoy a premium interest rate when you link your savings to an Apex Premier Plus Checking℠ or Apex Sapphire Checking℠ account.',
        'image' => 'https://picsum.photos/id/180/800/600'
    ],
    'cd_rates' => [
        [
            'term' => '6 Months',
            'rate' => '4.12%',
            'apy' => '4.20%',
            'is_best_value' => false
        ],
        [
            'term' => '12 Months',
            'rate' => '4.89%',
            'apy' => '5.00%',
            'is_best_value' => true
        ],
        [
            'term' => '24 Months',
            'rate' => '3.93%',
            'apy' => '4.00%',
            'is_best_value' => false
        ]
    ]
];

echo json_encode($savings_data);
