const express = require("express");
const router = express.Router();
const { sql } = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM Products");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message, error: err });
  }
});
router.post("/", async (req, res) => {
  const { ProductName, Price } = req.body;

  try {
    await sql.query`
      INSERT INTO Products
      (name,price)
      VALUES
      (${ProductName}, ${Price})
    `;

    res.status(201).json({
      message: "Product added successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
});
// Update a product
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const result = await sql.query`
      UPDATE products
      SET name = ${name},
          price = ${price}
      WHERE id = ${id}
    `;

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
});
// Delete a product
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await sql.query`
      DELETE FROM products
      WHERE id = ${id}
    `;

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
