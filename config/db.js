const mongoose = require("mongoose");

async function dbConnection() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB connected succesfully!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}

module.exports = dbConnection;
