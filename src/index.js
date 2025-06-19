import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectdb from "./db/db.js";
dotenv.config({
    path:"./env"
})
connectdb()