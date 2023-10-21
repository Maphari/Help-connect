import { FC } from "react";
import { StudentPlanning } from "./StudentPlanner";
import { LecturerPlanning } from "./LecturerPlanner";
import { PageNotFound } from "../UI/PageNotFound";

export const Planning: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");

  return studentToken ? (
    <StudentPlanning />
  ) : lecturerToken ? (
    <LecturerPlanning />
  ) : (
    <PageNotFound />
  );
};
