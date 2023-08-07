import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import { Error } from "./middleware/error.js";
import cookieParser from "cookie-parser";
import orderRoute from "./routes/orderRoute.js";

config({ path: "./config/config.env" });

export const app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://www.watertankdoctor.com",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

// ROUTE EXPORTS

app.use("/api", paymentRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

//MIDDLEWARE FOR ERROR

app.use(Error);

//what is this
