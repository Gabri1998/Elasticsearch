# Logs API – Backend (Laravel + Elasticsearch)

REST API for querying and paginating web logs stored in Elasticsearch.

---

## Tech Stack
- PHP 8.x
- Laravel
- Elasticsearch PHP Client v8
- Elasticsearch 8.11

---

## Main Files (Backend Logic)

### Routes
`routes/api.php`
- Defines the public API endpoint
- Exposes: `GET /api/logs`

---

### Controller
`app/Http/Controllers/LogController.php`
- Entry point for HTTP requests
- Reads query parameters (`q`, `page`)
- Delegates search logic to the service
- Handles errors and returns JSON responses

---

### Service
`app/Services/ElasticsearchService.php`
- Encapsulates all Elasticsearch logic
- Builds queries based on input:
  - Client IP (`term` query)
  - Hostname (`match` query)
  - Document `_id` (`ids` query)
- Handles pagination (`from`, `size`)
- Communicates directly with Elasticsearch

---

### Configuration
`config/elasticsearch.php`
- Defines Elasticsearch hosts
- Reads from `.env`

`.env`
- `ELASTICSEARCH_HOST=localhost:9200`

---

### CORS
`config/cors.php`
- Allows cross-origin requests from frontend
- Enables React app to access the API

---

## API Endpoint

### GET /api/logs

Query parameters:
- `q` (string) – IP, hostname, or Elasticsearch document ID
- `page` (int) – Page number (default: 1)

Example:
```bash
curl "http://127.0.0.1:8000/api/logs?q=5.123.144.95&page=1"

Response:

{
  "data": [...],
  "total": 10000,
  "page": 1
}

# Run Backend
composer install
php artisan serve