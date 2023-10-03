import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    category: String,
    type: String,
    os: String,
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
