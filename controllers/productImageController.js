const ProductImage = require("../models/productImage");

const getProductImages = async (req, res) => {
    try {
        const productImages = await ProductImage.find();
        res.json(productImages);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving product images");
    }
};

const addProductImage = async (req, res) => {
    try {
        const newProductImage = new ProductImage(req.body);
        await newProductImage.save();
        res.status(201).json(newProductImage);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding product image");
    }
};

const deleteProductImages = async (req, res) => {
    try {
        await ProductImage.deleteMany();
        res.status(200).send("All product images deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting product images");
    }
};

const showProductImage = async (req, res) => {
    const { productImageId } = req.params;
    try {
        const productImage = await ProductImage.findById(productImageId);
        if (!productImage) {
            return res.status(404).send("Product image not found");
        }
        res.json(productImage);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving product image");
    }
};

const updateProductImage = async (req, res) => {
    const { productImageId } = req.params;
    try {
        const updatedProductImage = await ProductImage.findByIdAndUpdate(productImageId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedProductImage) {
            return res.status(404).send("Product image not found");
        }
        res.json(updatedProductImage);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating product image");
    }
};

const deleteProductImage = async (req, res) => {
    const { productImageId } = req.params;
    try {
        const deletedProductImage = await ProductImage.findByIdAndDelete(productImageId);
        if (!deletedProductImage) {
            return res.status(404).send("Product image not found");
        }
        res.status(200).send("Product image deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting product image");
    }
};

module.exports = {
    getProductImages,
    addProductImage,
    deleteProductImages,
    showProductImage,
    updateProductImage,
    deleteProductImage,
};
