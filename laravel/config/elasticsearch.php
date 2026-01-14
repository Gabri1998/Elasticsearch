<?php
return [
     // Elasticsearch host from environment
    'hosts' => [
        env('ELASTICSEARCH_HOST', 'http://localhost:9200'),
    ],
];
