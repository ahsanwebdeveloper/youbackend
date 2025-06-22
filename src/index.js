import dotenv from 'dotenv';
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
import connectdb from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});

 // ✅ CREATE the app

// You can add your middlewares & routes here
// e.g., app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

connectdb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is ready at http://localhost:${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed", err);
  });
