import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

// HANDLING UNCAUGHT EXCEPTION

connectDB();

process.on("uncaughtException", (err) => {
  console.log(`Error message: ${err}`);
  console.log("Shutting down the server due to uncaught exception");

  process.exit(1);
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const server = app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT || 10000}`)
);

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise");

  server.close(() => {
    process.exit(1);
  });
});
