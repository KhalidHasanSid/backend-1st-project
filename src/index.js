import dotenv from "dotenv"
dotenv.config({path:"./env"})
import connectDB from "./db/index.js";


 connectDB();
















/*import mongoose from 'mongoose';
import dotenv from "dotenv"
import { db_name } from './constants.js';
import express from 'express';
const app= express();
console.log(db_name);
dotenv.config({path:'./env'});

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.DB_URL}/${db_name}`);
        console.log("connected");
        app.on("not listening",(err)=>{
            console.log(err);
        })

    }
    catch(err){
        app.listen(process.env.PORT,()=>{
            console.log("LISTENing at port ",process.env.PORT)
        })
        console.log("cannot connect successfully!!!!!!!!",err)
        throw err;
    }



})()*/