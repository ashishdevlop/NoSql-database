const mongoose=require('mongoose')
// Store Schema
const storeSchema = mongoose.Schema({
    storeId: Number,
    storeName: String,
    phone: String,
    email: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipcode: String
    }
  });
  
  const Store = mongoose.model("Store", storeSchema);
  module.export=Store