const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stores',
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderItem',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock