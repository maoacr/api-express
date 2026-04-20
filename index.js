const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express Server");
});

app.get("/new", (req, res) => {
  res.send("New route");
});

app.get("/products", (req, res) => {
  res.json({ name: "Product 1", price: 100 });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params; 
  res.json({ name: "Product " + id, price: 100 });
});

app.get("/products/:id/reviews/:reviewId", (req, res) => {
  const { id, reviewId } = req.params;
  res.json({ name: "Product " + id, reviewId: reviewId });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
