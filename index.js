const express = require("express");
const routerApi = require('./routes/index');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express Server");
});

app.get("/new", (req, res) => {
  res.send("New route");
});

app.get("/query-params", (req, res) => {
  const { name, price } = req.query;
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  res.json({ name: name, price: price });
});

routerApi(app);

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
