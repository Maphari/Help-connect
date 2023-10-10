import express, { Router } from "express";

import { HttpRegisterUserController } from "./register.controller";

const registerRouter: Router = express.Router();

registerRouter.post("/api/register-account", HttpRegisterUserController);

export { registerRouter};
