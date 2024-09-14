const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL);

const dropDatabase = async () => {
    try {
        await mongoose.connection.dropDatabase();
        console.log("Database dropped successfully");
    } catch (error) {
        console.error("Error dropping database:", error);
    } finally {
        mongoose.connection.close();
    }
};

dropDatabase();
