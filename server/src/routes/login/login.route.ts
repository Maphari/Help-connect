import express, { Router } from "express";
import { HttpLoginUserController } from "./login.controller";
const loginRouter: Router = express.Router();

loginRouter.post("/", HttpLoginUserController);

export { loginRouter };
