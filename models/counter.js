import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  id: String,
  userCounter: Number,
});

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;
