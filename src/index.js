// require ('dotenv').config({path : './env'})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config({
    path: "./env"
});

// Create an Express application
const app = express();

// Connect to the database
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("DB connection failed", err);
    });





// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";


/*
// approach one to connect data base
import express from "express"
const app = express()

;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("Error" , error);
        throw error
       })
       app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on the port ${process.env.PORT}`);
       })
    }
    catch (error) {
        console.log("Error :", error);
        throw error
    }


})()
    */