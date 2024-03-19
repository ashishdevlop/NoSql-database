const mongoose=require('mongoose')
// Category Schema
const categoriesSchema = mongoose.Schema({
    categoryId: {
      type: String,
      required: true,
      unique: true
    },
    categoryName: {
      type: String,
      required: true
    }
  });
  
  const Categories = mongoose.model("Category", categoriesSchema);
  module.export=Categories