require("./models/students.model");
require("./models/lecturer.model")
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieSession from "cookie-session";
import { keys } from "./key/key";

import { registerRouter } from "./routes/register/register.route";
import { loginRouter } from "./routes/login/login.route";
import { pinRouter } from "./routes/pinGenerator/pinGenerator.route";

const app = express();

mongoose.connect(keys.MONGO_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_SESSION_KEY],
  })
);
app.use(registerRouter);
app.use(loginRouter);
app.use(pinRouter);

export default app;
