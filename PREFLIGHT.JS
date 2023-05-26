const express = require('express');
const cors = require('cors');

const app = express();

const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 },
  { id: 3, name: 'Bob Smith', age: 40 },
];

const allowedOrigins = ['https://www.google.com', 'https://www.google.com.au'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      // If the origin is not specified, allow the request.
      callback(null, true);
    } else if (allowedOrigins.indexOf(origin) !== -1) {
      // If the origin is in the allowedOrigins array, allow the request.
      callback(null, true);
    } else {
      // Otherwise, reject the request with a 403 Forbidden status.
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Foo'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  preflightContinue: false
};

app.use(cors(corsOptions));

app.options('/api/data', cors(corsOptions), (req, res) => {
  res.send();
});

app.get('/api/data', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.header('Origin') || '*');
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
