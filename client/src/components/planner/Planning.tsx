import { FC } from "react";
import { StudentPlanning } from "./StudentPlanner";
import { LecturerPlanning } from "./LecturerPlanner";
import { PageNotFound } from "../UI/PageNotFound";

export const Planning: FC = () => {
  const lecturerToken = localStorage.getItem("lecturer-token");
  const studentToken = localStorage.getItem("student-token")

  return lecturerToken ? <LecturerPlanning /> : studentToken ? <StudentPlanning /> : <PageNotFound />;
};
