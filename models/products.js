const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  modelYear: {
    type: Number,
    required: true
  },
  listPrice: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product
