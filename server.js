const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🍔 Welcome to Zomato Clone App!');
});

app.listen(5000, () => {
  console.log('Zomato app running on port 5000');
});

