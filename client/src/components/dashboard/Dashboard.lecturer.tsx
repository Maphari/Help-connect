import React, { useContext, useState, useEffect } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { HiUser as ProfileIcon } from "react-icons/hi2";
import { IoIosAddCircle as AddIcon } from "react-icons/io";
import { IQuote, quoteStructure } from "./Dashboard.config";
import axios from "axios";
import { Header } from "./Header";
import { CourseDashboard } from "./CourseDashBoard";
import { DashboardUI } from "../UI/DashboardUI";

export const DashBoardLecturer: React.FC = () => {
  const { lecturer, isLoading } = useContext<IDataObject>(FetchUserDataContext);
  const [dailyQuote, setDailyQuote] = useState<IQuote>(quoteStructure);

  useEffect(() => {
    async function HttpGetQuote() {
      const quoteRes = await axios.get("/api/get-quotes");
      const data = quoteRes.data;
      setDailyQuote(data.quote);
    }

    HttpGetQuote();
  }, []);

  console.log(dailyQuote);

  if (isLoading && lecturer) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <DashboardUI>
          <header className="flex items-center justify-between">
            <div>
              <Header
                header="Dashboard"
                stylesHeader="text-2xl mb-1 font-bold"
                stylesSubHeader="text-xs opacity-50"
                subHeader={greetUserBasedOnTime(lecturer.firstName)}
              />
            </div>
            <div className="flex items-center gap-3">
              <form className="bg-slate-200 px-4 rounded-full">
                <div className="flex w-full items-center gap-1">
                  <span className="text-slate-500">
                    <SearchIcon />
                  </span>
                  <input
                    type="search"
                    placeholder="Search for courses, lessons, etc.."
                    className="bg-slate-200 flex-1 outline-none rounded-full p-[0.6rem] text-sm w-[15rem]"
                  />
                </div>
              </form>
              <div className="h-10 w-10 flex items-center justify-center text-xl rounded-full bg-slate-200">
                <span className="text-slate-500">
                  <NotificationIcon />
                </span>
              </div>
              <div className="h-10 w-10 flex items-center justify-center text-xl rounded-full bg-slate-200">
                <span className="text-slate-500">
                  <ProfileIcon />
                </span>
              </div>
            </div>
          </header>

          <section className="mt-10 flex gap-3">
            <section className="flex-1 flex flex-col gap-3">
              <section className="flex flex-wrap gap-3">
                <section className="bg-white p-5 rounded border flex flex-col flex-wrap flex-1">
                  <Header
                    header="Lecturer Statistics"
                    subHeader="Here you will find statistics based on your content"
                  />
                  <section className="mt-7 flex gap-3 items-center">
                    <div className="h-48 w-52 flex flex-col items-center justify-center bg-blue-100 p-4 rounded transition-all duration-700 ease-linear hover:cursor-pointer hover:bg-blue-200">
                      <span className="text-4xl text-blue-500">
                        <AddIcon />
                      </span>
                      <h6 className="text-base mt-2">Add course</h6>
                      <p className="text-[0.6rem] opacity-50 mt-1 text-center">
                        You can add as many courses as you like. giving you
                        extra lessons you wished for. best of luck
                      </p>
                    </div>
                    <CourseDashboard />
                  </section>
                </section>
                <section className="bg-white w-1/4 p-5 rounded border">
                  <Header
                    header="Lecturer events"
                    subHeader="Here you will find listing of all events so that you created"
                  />
                  <section className="mt-7"></section>
                </section>
              </section>
              <section className="flex flex-wrap gap-3">
                <section className="bg-white p-5 flex-1 rounded border">
                  <Header
                    header="Latest announcements"
                    subHeader="Here you will find listing of all latest announcement that you created"
                  />
                  <section className="mt-7"></section>
                </section>
              </section>
              <section className="flex gap-3 flex-wrap">
                <section className="bg-white p-5 rounded border flex-1">
                  <Header
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
