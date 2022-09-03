import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/testing", (err) => {
    if (err) console.log(err);
    console.log("MongoDB is connected");
  });
};

export default connectDB;
