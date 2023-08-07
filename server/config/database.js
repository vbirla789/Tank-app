import mongoose from "mongoose";

export const connectDB = async () => {
  const connection = await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MONGO Connection Open : ${data.connection.host}`);
    });
};
