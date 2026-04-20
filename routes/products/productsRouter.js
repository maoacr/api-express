const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
    const products = [];
    const { size } = req.query
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
  
  router.get("/:id", (req, res) => {
    const { id } = req.params; 
    if(id === 999 ){
      res.status(404).json({
        message: "Not found"
      }) 
    }else {
      res.status(200).json({ name: "Product " + id, price: 100 });
    }
  });
  
  router.get("/:id/reviews/:reviewId", (req, res) => {
    const { id, reviewId } = req.params;
    res.json({ name: "Product " + id, reviewId: reviewId });
  });

  // POST
  router.post("/", (req, res) => {
    const body = req.body;
    res.status(201).json({
      message: "New Product created by Insomnia",
      data: body
    });
  });

  // PUT
  router.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
      message: `Product with id ${id} updated`,
      data: body
    });
  });
  
  //PATCH
  router.patch("/products/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
      message: "Product patched",
      data: body
    });
  });

  //DELETE
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
      message: `Product with id ${id} was Deleted`
    })
  })

  module.exports = router;
