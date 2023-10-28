import express, { Router } from "express";
import { HttpCreateVideoController } from "./video.controller";
const videoRouter: Router = express.Router();

videoRouter.post("/api/live-video", HttpCreateVideoController);

export { videoRouter };
