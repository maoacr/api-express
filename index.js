const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express Server");
});

app.get("/new", (req, res) => {
  res.send("New route");
});

app.get("/products", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params; 
  res.json({ name: "Product " + id, price: 100 });
});

app.get("/products/:id/reviews/:reviewId", (req, res) => {
  const { id, reviewId } = req.params;
  res.json({ name: "Product " + id, reviewId: reviewId });
});

app.get("/query-params", (req, res) => {
  const { name, price } = req.query;
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  res.json({ name: name, price: price });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
