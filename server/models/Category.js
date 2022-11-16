const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  //   products: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "Product",
  //     },
  //   ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
