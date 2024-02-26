const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ title: "text" });
const Products = mongoose.model("products", ProductSchema);

Products.createIndexes({ title: "text" });
module.exports = Products;
