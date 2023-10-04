import express, { Router } from "express";

import { HttpRegisterUser } from "./register.controller";

const registerRouter: Router = express.Router();

registerRouter.post("/", HttpRegisterUser);

export default registerRouter;
