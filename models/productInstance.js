const mongoose = require("mongoose");

const productInstanceSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size",
        required: true,
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
        required: true,
    },
});

const ProductInstance = mongoose.model("ProductInstance", productInstanceSchema);
module.exports = ProductInstance;
