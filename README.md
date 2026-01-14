# Web Logs Viewer – Full Assignment

This project implements a complete log viewing system using Laravel, Elasticsearch, React, Docker, and Kibana.

---

## Project Overview

The system consists of:

- **Elasticsearch** – Stores web logs
- **Laravel API** – Fetches and filters logs
- **React Frontend** – Displays logs to the user
- **Kibana** – Optional log inspection and debugging
- **Docker** – Runs Elasticsearch & Kibana



## Architecture

React (Frontend)
↓ HTTP
Laravel API
↓ PHP Client
Elasticsearch





## Services

# Backend
- Laravel API
- Elasticsearch PHP client
- Service-based architecture

# Frontend
- React + Tailwind
- Paginated logs table
- Search functionality

# Infrastructure
- Elasticsearch 8.11
- Kibana 8.11
- Docker Compose

---

## Docker Setup (Elasticsearch + Kibana)

- Start services:
docker compose up -d

- Elasticsearch
http://localhost:9200/

- Kibana
http://localhost:5601/

# How to Run Everything

1. Start Elasticsearch & Kibana
docker compose up -d

2. Start Backend
cd laravel
composer install
php artisan serve


- Backend runs at:

http://127.0.0.1:8000

3. Start Frontend
cd logs-frontend
npm install
npm start


- Frontend runs at:

http://localhost:3000

# Assignment Requirements Covered

✔ Elasticsearch integration
✔ Backend API with pagination
✔ Search by multiple fields
✔ React-based frontend
✔ Dockerized infrastructure
✔ Clean architecture
✔ Readable, maintainable code

#Notes

Security disabled for local development

No authentication (out of scope)

Focus on clarity, structure, and correctness
# Elasticsearch
