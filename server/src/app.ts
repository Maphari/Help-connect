require("./models/students.model");
import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import { keys } from "./key/key";
import { registerRouter 
} from "./routes/register/register.route";
import { loginRouter } from "./routes/login/login.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_SESSION_KEY],
  })
);

app.use("/api/register-account", registerRouter);
app.use("/api/login-account", loginRouter);

export default app;
