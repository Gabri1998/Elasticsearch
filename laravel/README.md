# Logs API – Backend (Laravel + Elasticsearch)

This service exposes a REST API for querying and paginating web logs stored in Elasticsearch.



## Tech Stack

- PHP 8.x
- Laravel
- Elasticsearch PHP Client (v8.x)
- Elasticsearch 8.11
- Docker (for Elasticsearch & Kibana)



## Features

- Fetch logs from Elasticsearch
- Search by:
  - Client IP
  - Hostname
  - Elasticsearch document `_id`
- Pagination support
- CORS enabled for frontend access
- Clean service-based architecture



## API Endpoint

### GET `/api/logs`

#### Query Parameters

| Name | Type | Description |

| `q` | string | Search query (IP, hostname, or document ID) |
| `page` | number | Page number (default: 1) |

#### Example

```bash
curl "http://127.0.0.1:8000/api/logs?q=5.123.144.95&page=1"

{
  "data": [
    {
      "_index": "web_logs",
      "_id": "abc123",
      "_source": {
        "client": "5.123.144.95",
        "hostname": "example.com"
      }
    }
  ],
  "total": 10000,
  "page": 1
}

Architecture Overview

Controller
Handles HTTP requests and responses.

Service (ElasticsearchService)
Encapsulates all Elasticsearch logic and query building.

Config-based setup
Elasticsearch host configured via .env.

Configuration
.env
ELASTICSEARCH_HOST=localhost:9200

CORS

CORS is configured in:

config/cors.php


This allows requests from the frontend (React app).

Run Backend
composer install
php artisan serve


Server will be available at:

http://127.0.0.1:8000