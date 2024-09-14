const Size = require("../models/size");

const getSizes = async (req, res) => {
    try {
        const sizes = await Size.find();
        res.json(sizes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving sizes");
    }
};

const addSize = async (req, res) => {
    try {
        const newSize = new Size(req.body);
        await newSize.save();
        res.status(201).json(newSize);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding size");
    }
};

const deleteSizes = async (req, res) => {
    try {
        await Size.deleteMany();
        res.status(200).send("All sizes deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting sizes");
    }
};

const showSize = async (req, res) => {
    const { sizeId } = req.params;
    try {
        const size = await Size.findById(sizeId);
        if (!size) {
            return res.status(404).send("Size not found");
        }
        res.json(size);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving size");
    }
};

const updateSize = async (req, res) => {
    const { sizeId } = req.params;
    try {
        const updatedSize = await Size.findByIdAndUpdate(sizeId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedSize) {
            return res.status(404).send("Size not found");
        }
        res.json(updatedSize);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating size");
    }
};

const deleteSize = async (req, res) => {
    const { sizeId } = req.params;
    try {
        const deletedSize = await Size.findByIdAndDelete(sizeId);
        if (!deletedSize) {
            return res.status(404).send("Size not found");
        }
        res.status(200).send("Size deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting size");
    }
};

module.exports = {
    getSizes,
    addSize,
    deleteSizes,
    showSize,
    updateSize,
    deleteSize,
};
