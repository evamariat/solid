# solid
Homework #1 (Github Pull Request, Merge)

Simple JSON-serving API focused on homework solutions. Features unified response format and pagination for scalable data delivery.

Core Purpose
Serves structured JSON responses for educational exercises. Eliminates frontend complexity by providing ready-to-consume data with metadata.

Key Features
1) Unified Response Format: {success, data[], metadata, timestamp} envelope ensures consistency across all endpoints

2) Pagination: page, limit query params with full metadata (total, totalPages, hasNext, hasPrev)

Minimal Dependencies: Pure Express.js, no database—static data for instant setup

Homework-Optimized: Realistic API simulating production services (reviews)

Architecture

app.js (Express server)
├── / → paginated review data  
├── Data array
└── Unified response wrapper

Example Response

{
  "success": true,
  "data": [{"id":"1","title":"Book Review: The Name of the Wind"}],
  "metadata": {"total":3,"page":1,"limit":1,"totalPages":3,"hasNext":true},
  "timestamp": "2026-02-06T09:43:00Z"
}


# Development server
npm run dev

# Docker usage
docker compose up