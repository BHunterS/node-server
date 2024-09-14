const ProductInstance = require("../models/productInstance");

const getProductInstances = async (req, res) => {
    try {
        const productInstances = await ProductInstance.find();
        res.json(productInstances);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving product instances");
    }
};

const addProductInstance = async (req, res) => {
    try {
        const newProductInstance = new ProductInstance(req.body);
        await newProductInstance.save();
        res.status(201).json(newProductInstance);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding product instance");
    }
};

const deleteProductInstances = async (req, res) => {
    try {
        await ProductInstance.deleteMany();
        res.status(200).send("All product instances deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting product instances");
    }
};

const showProductInstance = async (req, res) => {
    const { productInstanceId } = req.params;
    try {
        const productInstance = await ProductInstance.findById(productInstanceId);
        if (!productInstance) {
            return res.status(404).send("Product instance not found");
        }
        res.json(productInstance);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving product instance");
    }
};

const updateProductInstance = async (req, res) => {
    const { productInstanceId } = req.params;
    try {
        const updatedProductInstance = await ProductInstance.findByIdAndUpdate(productInstanceId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedProductInstance) {
            return res.status(404).send("Product instance not found");
        }
        res.json(updatedProductInstance);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating product instance");
    }
};

const deleteProductInstance = async (req, res) => {
    const { productInstanceId } = req.params;
    try {
        const deletedProductInstance = await ProductInstance.findByIdAndDelete(productInstanceId);
        if (!deletedProductInstance) {
            return res.status(404).send("Product instance not found");
        }
        res.status(200).send("Product instance deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting product instance");
    }
};

module.exports = {
    getProductInstances,
    addProductInstance,
    deleteProductInstances,
    showProductInstance,
    updateProductInstance,
    deleteProductInstance,
};
