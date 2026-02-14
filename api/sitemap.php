<?php
header('Content-Type: application/xml; charset=utf-8');

$baseUrl = "http://localhost:3000"; // In production, this would be the actual domain
$pages = [
    '/' => '1.0',
    '/contact-us' => '0.8',
    '/locations' => '0.8',
    '/checking' => '0.9',
    '/savings' => '0.9',
    '/credit-cards' => '0.9',
    '/investing' => '0.9',
    '/business' => '0.9',
    '/wealth-management' => '0.9'
];

echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <?php foreach ($pages as $path => $priority): ?>
        <url>
            <loc>
                <?php echo $baseUrl . ($path === '/' ? '' : '/#' . $path); ?>
            </loc>
            <lastmod>
                <?php echo date('Y-m-d'); ?>
            </lastmod>
            <changefreq>daily</changefreq>
            <priority>
                <?php echo $priority; ?>
            </priority>
        </url>
    <?php endforeach; ?>
</urlset>