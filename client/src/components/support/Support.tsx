import { FC } from "react";
import { StudentSupport } from "./StudentSupport";
import { LecturerSupport } from "./LecturerSupport";
import { PageNotFound } from "../UI/PageNotFound";

export const Support: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");

  return studentToken ? (
    <StudentSupport />
  ) : lecturerToken ? (
    <LecturerSupport />
  ) : (
    <PageNotFound />
  );
};
