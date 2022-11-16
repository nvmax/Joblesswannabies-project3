const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  picture: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  msrp: {
    type: Number,
    required: false,
    unique: false,
    trim: true,
  },
  review: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  releasedate: {
    type: Date,
    required: false,
    unique: false,
    trim: true,
  },
  size: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  displaysize: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  displayresolution: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  weight: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  waterrating: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  colordisplay: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
