import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.router.js';

const app = express();

app.use(cors({
  origin: "http://localhost:8000", // or your frontend
  credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

// ✅ Mount user routes
app.use("/api/v1/users", userRoute);

export { app };
