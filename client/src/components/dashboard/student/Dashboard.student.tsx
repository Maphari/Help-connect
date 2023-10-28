import React, { useContext, useState, useEffect } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { FetchUserDataContext } from "../../../context/FetchUserData.context";
import { IDataObject } from "../../../context/Context.config";
import { greetUserBasedOnTime } from "../../../global/Functions.global";
import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { HiUser as ProfileIcon } from "react-icons/hi2";
import { IoIosAddCircle as AddIcon } from "react-icons/io";
import { IQuote, quoteStructure } from "../Dashboard.config";
import { DailyQuotes } from "../Dashboard.imports";
import { DashboardHeader } from "../../UI/DashboardHeader";
import { DashboardUI } from "../../UI/DashboardUI";
import { Course } from "../../UI/Course";
import axios from "axios";
import Cookies from "js-cookie";

export const DashBoardStudent: React.FC = () => {
  const { student, isLoading, google } =
    useContext<IDataObject>(FetchUserDataContext);
  const [dailyQuote, setDailyQuote] = useState<IQuote>(quoteStructure);
  const tokenStudent = Cookies.get("student-token");
  const googleTokenStudent = Cookies.get("student-google");
  const navigate: NavigateFunction = useNavigate();

  function navigateToNotification(): void {
    navigate("/notification");
  }

  useEffect(() => {
    async function HttpGetQuote() {
      const quoteRes = await axios.get("/api/get-quotes");
      const data = quoteRes.data;
      setDailyQuote(data.quote);
    }

    HttpGetQuote();
  }, []);

  if (isLoading && student) {
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
                  tokenStudent
                    ? student.firstName
                    : googleTokenStudent
                    ? google.names
                    : ""
                )}
              />
            </div>
            <div className="flex items-center gap-3 hover:cursor-pointer">
              <div
                onClick={navigateToNotification}
                className="h-10 w-10 flex items-center justify-center text-xl rounded-full bg-slate-200"
              >
                <span className="text-slate-500">
                  <NotificationIcon />
                </span>
              </div>
              {student.imageProperties?.fileData ? (
                <img
                  src={student.imageProperties.fileData}
                  alt={student.imageProperties.filename}
                  className="h-10 w-10 border rounded-full"
                />
              ) : googleTokenStudent ? (<img
                src={google.profile}
                alt={google.names}
                className="h-10 w-10 border rounded-full"
              />) : (
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
                    header="Courses overview"
                    subHeader="Here you will find the overview for the courses that you
                      will be studying."
                  />
                  <section className="mt-7 flex gap-3 items-center">
                    <div className="h-48 w-52 flex flex-col items-center justify-center bg-green-50 p-4 rounded transition-all duration-700 ease-linear hover:cursor-pointer hover:bg-green-100">
                      <span className="text-4xl text-green-500">
                        <AddIcon />
                      </span>
                      <h6 className="text-base mt-2">Add course</h6>
                      <p className="text-[0.6rem] opacity-50 mt-1 text-center">
                        You need to finish the current course in order to add a
                        new course. giving you extra lessons you wished for.
                      </p>
                    </div>
                    <section>
                      <Course
                        header={"Primary course"}
                        hoverStyle={"hover:bg-cyan-100 hover:cursor-pointer"}
                        explanation={
                          "You are currently enrolled in a primary course. And help connect wishes you all the best."
                        }
                        bgStyle={"bg-cyan-50"}
                        iconStyle={"text-cyan-500"}
                      />
                    </section>
                  </section>
                </section>
              </section>
              <section className="flex flex-wrap gap-3">
                <section className="bg-white p-5 rounded border">
                  <DashboardHeader
                    header="Upcoming events"
                    subHeader=" Here you will find listing of all upcoming events so that you don't miss any."
                  />
                  <section className="mt-7"></section>
                </section>
                <section className="bg-white p-5 flex-1 rounded border">
                  <DashboardHeader
                    header="Latest announcements"
                    subHeader="Here you will find listing of all latest announcement so
                      that you don't miss any."
                  />
                  <section className="mt-7"></section>
                </section>
                <section className="bg-white p-5 w-1/4 rounded border">
                  <DashboardHeader header="Daily motivations" subHeader="" />
                  <section className="mt-3">
                    <DailyQuotes
                      author={dailyQuote.author && dailyQuote.author}
                      category={dailyQuote.category}
                      quote={dailyQuote.quote && dailyQuote.quote}
                    />
                  </section>
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