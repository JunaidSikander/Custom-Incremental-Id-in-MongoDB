import User from "../models/user.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .send({ status: true, users, message: "users successfully retrieved" });
  } catch (e) {
    console.log(e);
    res.status(400).send({ status: false, message: e.message });
  }
};

const createUser = async (req, res) => {
  try {
    const name = req.body.name;
    await new User({ name }).save();
    res
      .status(201)
      .send({ status: true, message: "User created successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).send({ status: false, message: e.message });
  }
};

export { createUser, getAllUsers };
