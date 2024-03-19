const mongoose=require('mongoose')
// Order Schema
const orderSchema = mongoose.Schema({
    orderId: {
      type: String,
      required: true,
      unique: true
    },

    // this customer id is been mapped to the customer, customerid
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    customerName: {
      type: String,
      required: true
    },
    orderStatus: String,
    requiredDate: Date,
    shippedDate: Date,
    storeId: String
  });
  
  const Order = mongoose.model("Order", orderSchema);
  module.export=Order