import express from "express";
import connectDB from "./db.js";

import userRouter from "./routes/user.js";

const app = express();

await connectDB();

app.use(express.json());

app.use("/api/user", userRouter);

app.listen(5000, () => console.log("Server is Listening on PORT 5000"));
