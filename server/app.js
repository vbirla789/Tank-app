import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import { Error } from "./middleware/error.js";

config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

// ROUTE EXPORTS

app.use("/api/v1", productRoute);

//MIDDLEWARE FOR ERROR

app.use(Error);
