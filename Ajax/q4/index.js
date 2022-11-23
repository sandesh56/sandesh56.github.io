const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
const urlParser = bodyParser.urlencoded({ extended: false });
app.use(urlParser);
app.use(bodyParser.json());
app.use(
  session({
    secret: "imp",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 10000 * 6 },
  })
);

app.use("/js", express.static(path.join(__dirname, "view", "js")));
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

app.get("/", (req, res) => {
  res.render("item", {
    products: products,
  });
});

app.post("/content", (req, res) => {
  const productId = req.body.id;
  console.log(productId);
  const addedProduct = products.filter(
    (item) => item?.id === parseInt(productId)
  );
  let session = req.session;

  let name = addedProduct[0]?.name;
  if (!session.cart) {
    session.cart = [];
    session.cart.push({ ...addedProduct[0], quantity: 1 });
  } else {
    if (session.cart.filter((item) => item.name === name).length > 0) {
      let newArr = session.cart.reduce((acc, item) => {
        if (item?.name === name) {
          let incr = item?.quantity;
          incr++;
          return [
            ...acc,
            { ...item, quantity: incr, price: item?.price * incr },
          ];
        }
        return [...acc, item];
      }, []);
      session.cart = newArr;
    } else {
      session.cart.push({ ...addedProduct[0], quantity: 1 });
    }
  }
  res.redirect("/cartItems");
});

app.get("/cartItems", (req, res) => {
  let session = req.session?.cart;
  res.render("item", { products: session });
});

app.listen(3000);
