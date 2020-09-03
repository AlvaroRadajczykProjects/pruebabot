const http = require('http');
const express = require('express');
const app = express();
const dns = require('dns');
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello HTTPS!')
})

http.createServer(app).listen(3000, () => {
  console.log('Listening...')
})

