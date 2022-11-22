const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
const urlParser = bodyParser.urlencoded({ extended: false });
app.use(urlParser);

let products = [
  {
    name: "Tshirt",
    img: "https://placeimg.com/200/200/tshirt",
    price: 500,
    description: "This is tshirt",
    id: 1,
  },
  {
    name: "Bag",
    img: "https://placeimg.com/200/200/bag",
    price: 500,
    description: "Bag",
    id: 2,
  },
  {
    name: "Laptops",
    img: "https://placeimg.com/200/200/laptops",
    price: 500,
    description: "default",
    id: 3,
  },
  {
    name: "sweaters",
    img: "https://placeimg.com/200/200/sweaters",
    price: 500,
    description: "sweaters",
    id: 4,
  },
  {
    name: "Pants",
    img: "https://placeimg.com/200/200/pants",
    price: 500,
    description: "pants",
    id: 5,
  },
];
let cartItems = [];
app.get("/", (req, res) => {
  res.render("item", {
    products: products,
  });
});

app.post("/content", (req, res) => {
  const productId = req.body.id;
  const addedProduct = products.filter(
    (item) => item?.id === parseInt(productId)
  );
  cartItems = [...cartItems, ...addedProduct];
  console.log(cartItems);
  res.redirect("/cartItems");
});

app.get("/cartItems", (req, res) => {
  res.render("item", { products: cartItems });
});

app.listen(3000);
