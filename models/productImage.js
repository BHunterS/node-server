const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
});

const ProductImage = mongoose.model("ProductImage", productImageSchema);

module.exports = ProductImage;
