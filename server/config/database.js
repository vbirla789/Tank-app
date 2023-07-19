import mongoose from "mongoose";

export const connectDB = async () => {
  const connection = await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MONGO Connection Open");
    })
    .catch((err) => {
      console.log("MONGO Connection ERROR!!");
      console.log(err);
    });
};
