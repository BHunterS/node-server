const Product = require("../models/product");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving products");
    }
};

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding product");
    }
};

const deleteProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        res.status(200).send("All products deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting products");
    }
};

const showProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving product");
    }
};

const updateProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating product");
    }
};

const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send("Product deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting product");
    }
};

module.exports = {
    getProducts,
    addProduct,
    deleteProducts,
    showProduct,
    updateProduct,
    deleteProduct,
};
