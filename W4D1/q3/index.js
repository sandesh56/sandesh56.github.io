const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use("/js", express.static(path.join(__dirname, "view", "js")));

const products = [
  {
    name: "Mobile",
    description: "A new product",
    price: 500,
    id: 0,
    image:
      "https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Laptops",
    description: "Coding laptops ",
    price: 2000,
    id: 1,
    image:
      "https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

app.get("/", (req, res) => {
  res.render("item", {
    products: products,
    items: [],
  });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.render("product", { product: products[id] });
});
app.listen(3000);
