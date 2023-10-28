import { FC } from "react";
import { LecturerVideo } from "./LecturerVideo";
import { StudentLive } from "./StudentLive";
import { PageNotFound } from "../UI/PageNotFound";

export const Learning: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");

  return studentToken ? (
    <StudentLive />
  ) : lecturerToken ? (
    <LecturerVideo />
  ) : (
    <PageNotFound />
  );
};
