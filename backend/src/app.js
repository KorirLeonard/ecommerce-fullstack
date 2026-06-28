const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is working properly!");
});
module.exports = app;
