import express, { Router } from "express";
import passport from "passport";

const passportAuthRouter: Router = express.Router();

import { HttpPassportGoogleAuthController } from "./passportAuth.controller";
import { authSessionMiddleware } from "../../../middleware/authSession.middleware";

passportAuthRouter.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

passportAuthRouter.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "",
    failureRedirect: "",
  })
);

passportAuthRouter.get(
  "/api/auth/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);
passportAuthRouter.get(
  "/api/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "",
    failureRedirect: "",
  })
);

passportAuthRouter.get(
  "/api/auth/success",
  authSessionMiddleware,
  HttpPassportGoogleAuthController
);

export { passportAuthRouter };
