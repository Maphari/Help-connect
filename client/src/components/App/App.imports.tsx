import React from "react";
import { Landing } from "../Landing/Landing";
import { RegisterInformation } from "../account/RegisterInformation";
import { StudentLogin } from "../account/student/Login.student";
import { StudentRegister } from "../account/student/Register.student";
import { LecturerLogin } from "../account/lecturer/Lecturer.login";
import { LecturerRegister } from "../account/lecturer/Lecturer.register";
import { PageNotFound } from "../UI/PageNotFound";
import { AccountOptionsLogin } from "../account/AccountOptions.login";
import { AccountOptionsRegister } from "../account/AccountOptions.register";
import { VerifyEmail } from "../account/email/VerifyEmail";
import { RegisterService } from "../account/service/Register.service";
import { LoginService } from "../account/service/Login.service";
import { DashboardService } from "../account/service/Dashboard.service";

import { DashBoardStudent } from "../dashboard/Dashboard.student";
import { DashBoardLecturer } from "../dashboard/Dashboard.lecturer";


export { React };

export {
  Landing,
  RegisterInformation,
  StudentLogin,
  StudentRegister,
  LecturerRegister,
  LecturerLogin,
  PageNotFound,
  AccountOptionsLogin,
  AccountOptionsRegister,
  VerifyEmail,
  RegisterService,
  LoginService,
};

export {
  DashBoardStudent,
  DashBoardLecturer,
  DashboardService
}
