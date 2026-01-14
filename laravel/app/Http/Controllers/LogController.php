<?php

namespace App\Http\Controllers;

use App\Services\ElasticsearchService;
use Illuminate\Http\Request;

class LogController extends Controller
{
    // Elasticsearch service instance
    private ElasticsearchService $es;

    // Inject Elasticsearch service
    public function __construct(ElasticsearchService $es)
    {
        $this->es = $es;
    }

    // Handle GET /api/logs
    public function index(Request $request)
    {
        // Read search query (?q=...)
        $q = $request->query('q');

        // Read page number, default to 1
        $page = max((int) $request->query('page', 1), 1);

        // Fixed page size
        $size = 20;

        try {
            // Execute search via service
            $response = $this->es->searchLogs($q, $page, $size);
        } catch (\Throwable $e) {
            // Return error if Elasticsearch fails
            return response()->json([
                'error'   => 'Elasticsearch failure',
                'message' => $e->getMessage(),
            ], 500);
        }

        // Return normalized API response
        return response()->json([
            'data'  => $response['hits']['hits'] ?? [],
            'total' => $response['hits']['total']['value'] ?? 0,
            'page'  => $page,
        ]);
    }
}
