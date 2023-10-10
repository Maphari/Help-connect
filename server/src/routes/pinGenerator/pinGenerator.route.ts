import express, { Router } from "express";
const pinRouter: Router = express.Router();

import { HttpEmailPinGeneratorController } from "./pinGenerator.controller";
import { HttpValidatePin } from "./pinValidator.controller";

pinRouter.post("/api/verify-email-pin", HttpEmailPinGeneratorController);
pinRouter.post("/api/verify-code", HttpValidatePin);

export { pinRouter };
