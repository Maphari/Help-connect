import { FC } from "react";
import { StudentSetting } from "./StudentSetting";
import { LecturerSetting } from "./LecturerSetting";
import { PageNotFound } from "../UI/PageNotFound";

export const Setting: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");

  return studentToken ? (
    <StudentSetting />
  ) : lecturerToken ? (
    <LecturerSetting />
  ) : (
    <PageNotFound />
  );
};
