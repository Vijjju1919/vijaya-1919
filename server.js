cat > server.js <<'EOF'
const express = require('express');
const app = express();

const foods = [
  { id: 1, name: "Pizza",   price: 250 },
  { id: 2, name: "Burger",  price: 150 },
  { id: 3, name: "Biryani", price: 300 },
  { id: 4, name: "Pasta",   price: 200 },
  { id: 5, name: "Ice Cream", price: 100 }
];

app.get('/', (req, res) => {
  res.send('🍔 Welcome to Zomato Clone App! Visit /foods for menu.');
});

app.get('/foods', (req, res) => {
  res.json(foods);
});

app.listen(5000, () => {
  console.log('🚀 Zomato app running on port 5000');
});
EOF

