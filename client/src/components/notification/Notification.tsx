import { FC } from "react";
import { StudentNotification } from "./StudentNotification";
import { LecturerNotification } from "./LecturerNotifications";
import { PageNotFound } from "../UI/PageNotFound";

export const Notification: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");

  return studentToken ? (
    <StudentNotification />
  ) : lecturerToken ? (
    <LecturerNotification />
  ) : (
    <PageNotFound />
  );
};
