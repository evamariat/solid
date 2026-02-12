import express from 'express';
import cors from 'cors';
import responseMiddleware from './middleware/response.js';  // Note .js extension

const app = express()

app.use(cors())

app.use(express.json())

app.use(responseMiddleware)

const reviews = [
  { id: "1", title: "Book Review: The Name of the Wind" },
  { id: "2", title: "Game Review: Pokémon Brilliant Diamond" },
  { id: "3", title: "Show Review: Alice in Borderland" }
  // Add more for realistic pagination testing
];

app.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const data = reviews.slice(offset, offset + limit);
  const total = reviews.length;

  const response = {
    success: true,
    data,
    metadata: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: offset + limit < total,
      hasPrev: page > 1
    },
    timestamp: new Date().toISOString()
  };

  res.json(response);
})

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});// test
// CI/CD test run
// test
