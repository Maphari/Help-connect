import { FC } from "react";
import { StudentProfile } from "./StudentProfile";
import { LecturerProfile } from "./LecturerProfile";
import { PageNotFound } from "../UI/PageNotFound";

export const Profile: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");

  return studentToken ? (
    <StudentProfile />
  ) : lecturerToken ? (
    <LecturerProfile />
  ) : (
    <PageNotFound />
  );
};
