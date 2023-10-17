import React, {
  DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES,
} from "react";
import { useNavigate } from "react-router-dom";

import {
  DashBoardHelper,
  DashBoardLecturer,
  DashBoardStudent,
} from "./Dashboard.imports";

export const DashBoardHandler: React.FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");
  const helperToken = localStorage.getItem("helper-token");
  const navigate = useNavigate()


  const option:
    | "student"
    | "lecturer"
    | "helper"
    | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
    | null = studentToken
    ? "student"
    : lecturerToken
    ? "lecturer"
    : helperToken && "helper";

  if (option === "student") {
    return <DashBoardStudent />;
  } else if (option === "helper") {
    return <DashBoardHelper />;
  } else if (option === "lecturer") {
    return <DashBoardLecturer />;
  } else {
    localStorage.clear()
    navigate("/account/login-choice", {replace: true})
  }
};
