const express = require("express");
const PORT = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

const db=require("./config/mongoose");
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
const Customer =require("./models/customers");
const Order = require("./models/orders");
const Store = require("./models/stores");
const OrderItem = require("./models/order_item");
const Categories= require("./models/categories");
const Product= require("./models/products");
const Stock= require("./models/stocks");
const Brand= require("./models/brands");
// API endpoints
// Customer API
app.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/customers", async (req, res) => {
  try {
    const customerData = req.body;
    const newCustomer = new Customer(customerData);
    await newCustomer.save();
    res.status(201).json({ message: "Customer data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Order API
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/orders", async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = new Order(orderData);
    await newOrder.save();
    res.status(201).json({ message: "Order data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Store API
app.get("/stores", async (req, res) => {
  try {
    const stores = await Store.find({});
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/stores", async (req, res) => {
  try {
    const storeData = req.body;
    const newStore = new Store(storeData);
    await newStore.save();
    res.status(201).json({ message: "Store data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Order Item API
app.get("/orderitems", async (req, res) => {
  try {
    const orderItems = await OrderItem.find({});
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/orderitems", async (req, res) => {
  try {
    const orderItemData = req.body;
    const newOrderItem = new OrderItem(orderItemData);
    await newOrderItem.save();
    res.status(201).json({ message: "Order item data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// API endpoints
// Get all categories
app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new category
app.post("/categories", async (req, res) => {
  try {
    const categoriesData = req.body;
    const newCategories = new Categories(categoriesData);
    await newCategories.save();
    res.status(201).json({ message: "Categories data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new product
app.post("/products", async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = new Product(productData);
    await newProduct.save();
    res.status(201).json({ message: "Product data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all stocks
app.get("/stocks", async (req, res) => {
  try {
    const stocks = await Stock.find({});
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new stock
app.post("/stocks", async (req, res) => {
  try {
    const stockData = req.body;
    const newStock = new Stock(stockData);
    await newStock.save();
    res.status(201).json({ message: "Stock data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// GET all brands
app.get("/brands", async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new brand
app.post("/brands", async (req, res) => {
  try {
    const brandData = req.body;
    const newBrand = new Brand(brandData);
    await newBrand.save();
    res.status(201).json({ message: "Brand data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Server running
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
