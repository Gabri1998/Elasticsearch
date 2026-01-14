<?php

return [

    // Apply CORS only to API routes
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    // Allow all HTTP methods
    'allowed_methods' => ['*'],

    // Allow all origins (dev setup)
    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    // Allow all headers
    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    // No preflight caching
    'max_age' => 0,

    // No credentials required
    'supports_credentials' => false,
];
