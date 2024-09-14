const Gender = require("../models/gender");

const getGenders = async (req, res) => {
    try {
        const genders = await Gender.find();
        res.json(genders);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving genders");
    }
};

const addGender = async (req, res) => {
    try {
        const newGender = new Gender(req.body);
        await newGender.save();
        res.status(201).json(newGender);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding gender");
    }
};

const deleteGenders = async (req, res) => {
    try {
        await Gender.deleteMany();
        res.status(200).send("All genders deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting genders");
    }
};

const showGender = async (req, res) => {
    const { genderId } = req.params;
    try {
        const gender = await Gender.findById(genderId);
        if (!gender) {
            return res.status(404).send("Gender not found");
        }
        res.json(gender);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving gender");
    }
};

const updateGender = async (req, res) => {
    const { genderId } = req.params;
    try {
        const updatedGender = await Gender.findByIdAndUpdate(genderId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedGender) {
            return res.status(404).send("Gender not found");
        }
        res.json(updatedGender);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating gender");
    }
};

const deleteGender = async (req, res) => {
    const { genderId } = req.params;
    try {
        const deletedGender = await Gender.findByIdAndDelete(genderId);
        if (!deletedGender) {
            return res.status(404).send("Gender not found");
        }
        res.status(200).send("Gender deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting gender");
    }
};

module.exports = {
    getGenders,
    addGender,
    deleteGenders,
    showGender,
    updateGender,
    deleteGender,
};
