const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandId: {
    type: String,
    required: true,
    unique: true
  },
  brandName: {
    type: String,
    required: true
  }
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand