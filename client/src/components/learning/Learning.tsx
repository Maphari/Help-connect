import { FC } from "react";
import { LecturerVideo } from "./LecturerVideo";
import { StudentLive } from "./StudentLive";
import { PageNotFound } from "../UI/PageNotFound";
import Cookies from "js-cookie";

export const Learning: FC = () => {
  const studentToken = Cookies.get("student-token");
  const lecturerToken = Cookies.get("lecturer-token");

  return studentToken ? (
    <StudentLive />
  ) : lecturerToken ? (
    <LecturerVideo />
  ) : (
    <PageNotFound />
  );
};
