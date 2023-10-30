require("./models/student/students.model");
require("./models/student/student.passport.model");
require("./models/lecturer/lecturer.model");
require("./api/passport.student.api");
require("./models/quotes/quotes.model");
require("./models/announcement/announcement.model");
require("./models/event/event.model");

import express, { urlencoded } from "express";
import cors from "cors";
import passport from "passport";

import { registerRouter } from "./routes/auth/register/register.route";
import { loginRouter } from "./routes/auth/login/login.route";
import { pinRouter } from "./routes/auth/pinGenerator/pinGenerator.route";
import { passportAuthRouter } from "./routes/auth/passportAuth/passportAuth.route";
import { fetchUserRoute } from "./routes/fetchData/userData.route";
import { quoteRoute } from "./routes/quotes/quotes.route";
import { cookie } from "./cookie/cookie.session";
import { HttpMongoDBConnection } from "./database/database.connection";
import { announcementRouter } from "./routes/announcement/announcement.route";
import { fetchAnnouncement } from "./routes/fetchData/fetchAnnouncement";
import { fetchEventRouter } from "./routes/fetchData/fetchEvent";

import { eventRouter } from "./routes/event/event.route";

const app = express();

HttpMongoDBConnection();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(urlencoded({ extended: true, limit: "10mb" }));
app.use(cookie);
app.use(passport.initialize());
app.use(passport.session());
app.use(registerRouter);
app.use(loginRouter);
app.use(pinRouter);
app.use(passportAuthRouter);
app.use(fetchUserRoute);
app.use(quoteRoute);
app.use(announcementRouter);
app.use(fetchAnnouncement);
app.use(eventRouter);
app.use(fetchEventRouter)

export default app;
