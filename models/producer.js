const mongoose = require("mongoose");

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Producer = mongoose.model("Producer", producerSchema);
module.exports = Producer;
