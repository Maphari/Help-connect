import express, { Router } from "express";

import { HttpRegisterUserController } from "./register.controller";

const registerRouter: Router = express.Router();

registerRouter.post("/", HttpRegisterUserController);

export { registerRouter};
