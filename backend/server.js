const express =require("express");
const dotenv = require("dotenv");


const app=express();
dotenv.config();

//port value selected from env file
const port=process.env.PORT || 9000;

const server=app.listen(
    port,
    console.log(`server running on ${port}...`)
);
