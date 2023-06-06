const express =require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");



const app=express();
dotenv.config();
connectDB();

//port value selected from env file
const port=process.env.PORT || 9000;

const server=app.listen(
    port,
    console.log(`server running on ${port}...`)
);
