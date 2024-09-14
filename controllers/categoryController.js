const Category = require("../models/category");

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving categories");
    }
};

const addCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding category");
    }
};

const deleteCategories = async (req, res) => {
    try {
        await Category.deleteMany();
        res.status(200).send("All categories deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting categories");
    }
};

const showCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).send("Category not found");
        }
        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving category");
    }
};

const updateCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedCategory) {
            return res.status(404).send("Category not found");
        }
        res.json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating category");
    }
};

const deleteCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            return res.status(404).send("Category not found");
        }
        res.status(200).send("Category deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting category");
    }
};

module.exports = {
    getCategories,
    addCategory,
    deleteCategories,
    showCategory,
    updateCategory,
    deleteCategory,
};
