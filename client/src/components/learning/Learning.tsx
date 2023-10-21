import { FC } from "react";
import { LecturerVideo } from "./LecturerVideo";
import { StudentLearning } from "./StudentLearning";
import { PageNotFound } from "../UI/PageNotFound";

export const Learning: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");

  return studentToken ? (
    <StudentLearning />
  ) : lecturerToken ? (
    <LecturerVideo />
  ) : (
    <PageNotFound />
  );
};
