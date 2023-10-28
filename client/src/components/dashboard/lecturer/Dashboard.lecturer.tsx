import React, { useContext } from "react";
import { FetchUserDataContext } from "../../../context/FetchUserData.context";
import { IDataObject } from "../../../context/Context.config";
import {
  greetUserBasedOnTime,
  isStudentOrLecturer,
} from "../../../global/Functions.global";
import { IoNotifications as NotificationIcon } from "react-icons/io5";
import {
  HiUser as ProfileIcon,
  HiUserGroup as CommunityIcon,
} from "react-icons/hi2";
import {
  BsCameraVideoFill as LearningIcon,
  BsFillCalendarEventFill as EventIcon,
} from "react-icons/bs";
import { BiSolidReport as ReportIcon } from "react-icons/bi";
import { DashboardHeader } from "../../UI/DashboardHeader";
import { DashboardUI } from "../../UI/DashboardUI";
import { LecturerTracker } from "../../UI/LecturerTracker";

export const DashBoardLecturer: React.FC = () => {
  const { lecturer, isLoading, google } =
    useContext<IDataObject>(FetchUserDataContext);
  const colorToRenderBG = isStudentOrLecturer("300", "bg");
  const colorToRenderText = isStudentOrLecturer("500", "text");
  const tokenLecturer = localStorage.getItem("lecturer-token");
  const googleTokenLecturer = localStorage.getItem("lecturer-google");

  if (isLoading && lecturer) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <DashboardUI>
          <header className="flex items-center justify-between">
            <div>
              <DashboardHeader
                header="Dashboard"
                stylesHeader="text-2xl mb-1 font-bold"
                stylesSubHeader="text-xs opacity-50"
                subHeader={greetUserBasedOnTime(
                  tokenLecturer
                    ? lecturer.firstName
                    : googleTokenLecturer
                    ? google.names
                    : ""
                )}
              />
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`h-10 w-10 flex items-center justify-center text-xl rounded-full ${colorToRenderBG} hover:cursor-pointer`}
              >
                <span className={`${colorToRenderText}`}>
                  <NotificationIcon />
                </span>
              </div>
              {lecturer.imageProperties?.fileData ? (
                <img
                  src={lecturer.imageProperties.fileData}
                  alt={lecturer.imageProperties.filename}
                  className="h-10 w-10 border rounded-full"
                />
              ) : googleTokenLecturer ? (
                <img
                  src={google.profile}
                  alt={google.names}
                  className="h-10 w-10 border rounded-full"
                />
              ) : (
                <div className="h-10 w-10 flex items-center justify-center text-xl rounded-full bg-slate-200">
                  <span className="text-slate-500">
                    <ProfileIcon />
                  </span>
                </div>
              )}
            </div>
          </header>

          <section className="mt-10 flex gap-3">
            <section className="flex-1 flex flex-col gap-3">
              <section className="flex flex-wrap gap-3">
                <section className="bg-white p-5 rounded border flex flex-col flex-wrap flex-1">
                  <DashboardHeader
                    header="Lecturer Statistics"
                    subHeader="Here you will find statistics based on your content"
                  />
                  <section className="mt-7 flex gap-3 items-center">
                    <section className="flex flex-wrap gap-2">
                      <LecturerTracker
                        header="0 students"
                        bgStyle="bg-violet-50"
                        iconStyle="text-violet-500"
                        explanation="Track how many students are enrolled in your course. You'll get some motivation"
                      >
                        <CommunityIcon />
                      </LecturerTracker>
                      <LecturerTracker
                        header="0 Videos"
                        bgStyle="bg-blue-50"
                        iconStyle="text-blue-500"
                        explanation="Track how many videos you have already posted so far. You'll get some motivation"
                        styles="text-3xl"
                      >
                        <LearningIcon />
                      </LecturerTracker>
                      <LecturerTracker
                        header="0 Events"
                        bgStyle="bg-indigo-50"
                        iconStyle="text-indigo-500"
                        explanation="Track how many events you already have so far. You'll get some motivation"
                        styles="text-2xl"
                      >
                        <EventIcon />
                      </LecturerTracker>
                      <LecturerTracker
                        header="0 Reports"
                        bgStyle="bg-red-50"
                        iconStyle="text-red-500"
                        explanation="Track how many reports you already have so far. So that you can improve based on that report"
                        styles="text-3xl"
                      >
                        <ReportIcon />
                      </LecturerTracker>
                    </section>
                  </section>
                </section>
              </section>
              <section className="flex flex-wrap gap-3">
                <section className="bg-white p-5 rounded border">
                  <DashboardHeader
                    header="Lecturer events"
                    subHeader="Here you will find listing of all events so that you created"
                  />
                  <section className="mt-7"></section>
                </section>
                <section className="bg-white p-5 flex-1 rounded border">
                  <DashboardHeader
                    header="Latest announcements"
                    subHeader="Here you will find listing of all latest announcement that you created"
                  />
                  <section className="mt-7"></section>
                </section>
              </section>
              <section className="flex gap-3 flex-wrap">
                <section className="bg-white p-5 rounded border flex-1">
                  <DashboardHeader
                    header="Track history"
                    subHeader=" Here you will find all your history so that you can keep
                      track."
                  />
                  <section className="mt-7"></section>
                </section>
              </section>
            </section>
          </section>
        </DashboardUI>
      </>
    );
  }
};
