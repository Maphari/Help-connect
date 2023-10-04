import express from "express";
import cors from "cors";

import registerRouter from "./routes/register/register.route";


const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/register-account", registerRouter);

export default app;
