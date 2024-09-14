const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    producer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producer",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    gender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Gender",
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    photo: {
        type: String,
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
