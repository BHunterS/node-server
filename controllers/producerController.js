const Producer = require("../models/producer");

const getProducers = async (req, res) => {
    try {
        const producers = await Producer.find();
        res.json(producers);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving producers");
    }
};

const addProducer = async (req, res) => {
    try {
        const newProducer = new Producer(req.body);
        await newProducer.save();
        res.status(201).json(newProducer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding producer");
    }
};

const deleteProducers = async (req, res) => {
    try {
        await Producer.deleteMany();
        res.status(200).send("All producers deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting producers");
    }
};

const showProducer = async (req, res) => {
    const { producerId } = req.params;
    try {
        const producer = await Producer.findById(producerId);
        if (!producer) {
            return res.status(404).send("Producer not found");
        }
        res.json(producer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving producer");
    }
};

const updateProducer = async (req, res) => {
    const { producerId } = req.params;
    try {
        const updatedProducer = await Producer.findByIdAndUpdate(producerId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedProducer) {
            return res.status(404).send("Producer not found");
        }
        res.json(updatedProducer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating producer");
    }
};

const deleteProducer = async (req, res) => {
    const { producerId } = req.params;
    try {
        const deletedProducer = await Producer.findByIdAndDelete(producerId);
        if (!deletedProducer) {
            return res.status(404).send("Producer not found");
        }
        res.status(200).send("Producer deleted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting producer");
    }
};

module.exports = {
    getProducers,
    addProducer,
    deleteProducers,
    showProducer,
    updateProducer,
    deleteProducer,
};
