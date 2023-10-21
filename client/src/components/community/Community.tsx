import { FC } from "react";
import { StudentCommunity } from "./StudentCommunity";
import { LecturerCommunity } from "./LecturerCommunity";
import { PageNotFound } from "../UI/PageNotFound";

export const Community: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");

  return studentToken ? (
    <StudentCommunity />
  ) : lecturerToken ? (
    <LecturerCommunity />
  ) : (
    <PageNotFound />
  );
};
