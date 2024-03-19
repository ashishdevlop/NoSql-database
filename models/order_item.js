const mongoose=require('mongoose')

// Order Item Schema
const orderItemSchema = mongoose.Schema({
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true
    },
    itemId: {
      type: String,
      required: true,
      unique: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    listPrice: Number,
    discount: Number
  });
  
  const OrderItem = mongoose.model("OrderItem", orderItemSchema);
  module.export=OrderItem  