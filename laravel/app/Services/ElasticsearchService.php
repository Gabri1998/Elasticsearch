<?php

namespace App\Services;

use Elastic\Elasticsearch\Client;
use Elastic\Elasticsearch\ClientBuilder;

class ElasticsearchService
{
    // Elasticsearch client instance
    private Client $client;

    // Build client using config
    public function __construct()
    {
        $this->client = ClientBuilder::create()
            ->setHosts(config('elasticsearch.hosts'))
            ->build();
    }

    // Search logs with pagination
    public function searchLogs(?string $query, int $page = 1, int $size = 20)
    {
        if ($query) {

            // If query is an IP address → search client field
            if (filter_var($query, FILTER_VALIDATE_IP)) {
                $esQuery = [
                    'term' => [
                        'client' => $query,
                    ],
                ];

            // If query looks like Elasticsearch _id
            } elseif (preg_match('/^[A-Za-z0-9_-]{10,}$/', $query)) {
                $esQuery = [
                    'ids' => [
                        'values' => [$query],
                    ],
                ];

            // Otherwise treat query as hostname
            } else {
                $esQuery = [
                    'match' => [
                        'hostname' => $query,
                    ],
                ];
            }

        // No query → return all documents
        } else {
            $esQuery = [
                'match_all' => (object)[],
            ];
        }

        // Execute search with pagination
        return $this->client->search([
            'index' => 'web_logs',
            'from'  => ($page - 1) * $size,
            'size'  => $size,
            'body'  => [
                'query' => $esQuery,
            ],
        ])->asArray();
    }
}
