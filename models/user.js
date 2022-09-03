import mongoose from "mongoose";
import Counter from "./counter.js";

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

// Add Incremental ID to user schema
userSchema.pre("validate", async function (next) {
  let counter, id;
  // "This" Refers the current user which will be saved
  const _doc = this;

  try {
    counter = await Counter.findOneAndUpdate(
      { id: "counter" },
      { $inc: { userCounter: 1 } },
      { new: true }
    );

    if (counter === null) {
      await new Counter({ id: "counter", userCounter: 0 }).save();
      id = 1;
    } else {
      id = counter.userCounter;
    }

    // Replacing the id with the user counter number
    _doc.id = id;
    next();
  } catch (err) {
    console.log(err);
    next();
  }
});

const User = mongoose.model("User", userSchema);

export default User;
