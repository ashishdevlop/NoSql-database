const mongoose=require('mongoose')
// Customer Schema
const customerSchema = mongoose.Schema({
    customerId:Number,
    firstName: String,
    lastName: String,
    phone: String,
    email: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipcode: String
    }
  });
  
  const Customer = mongoose.model("Customer", customerSchema);
  module.export=Customer