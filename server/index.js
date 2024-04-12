const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoute")

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

app.get("/", (req,res) => {
    res.send("Welcome to Bletchley");
})

const PORT = process.env.port || 5000;
const URI = process.env.COMPASS_URI;

app.listen(PORT, (req,res) => {
    console.log(`Server running on PORT: ${PORT}`);
})

mongoose.connect(URI, {}).then(() => {
    console.log("MongoDB connection established");
}).catch((err) => console.log("MongoDB connection failed: ", err.message))