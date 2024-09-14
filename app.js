require("dotenv").config();

const express = require("express");
const dbConnection = require("./config/db");
const router = require("./routes/router");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    }),
);
app.use("/api", router);
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server succesfully started on port ${PORT}`);
});
