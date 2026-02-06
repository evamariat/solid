const express = require('express')
const cors = require('cors')
const responseMiddleware = require('./middleware/response');

const app = express()

app.use(cors())

app.use(express.json());
// Add unified response middleware
app.use(responseMiddleware);


app.get('/', (req, res) => {
  res.jsonResponse([
    {
      "id":"1",
      "title":"Book Review: The Name of the Wind"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    timestamp: new Date().toISOString()
  };

  res.json(response);
})

app.post('/', (req, res) => {
  res.jsonResponse({ id: 4, title: 'Untold' }, { 
    statusCode: 201,
    message: 'User created' 
  });
});

app.get('/not-found', (req, res) => {
  res.errorResponse('Resource not found', 404);
});



app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});