import React, { useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { SideNavigation } from "../navigation/SideNavigation";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { HiUser as ProfileIcon } from "react-icons/hi2";

function greetUserBasedOnTime(): string {
  const time: number = new Date().getHours();
  if (time < 12) {
    return "Good morning";
  } else if (time < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

export const DashBoardStudent: React.FC = () => {
  const { student, isLoading } = useContext<IDataObject>(FetchUserDataContext);

  if (isLoading && student) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <section className="dashboard-container">
          <SideNavigation />
          <section className="dashboard-container__main rounded-l-[4rem] p-20">
            <header className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  <span>{greetUserBasedOnTime()}</span>{" "}
                  <span>{student.firstName}</span>
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <form className="bg-slate-300 px-2 rounded">
                  <div className="flex items-center gap-1">
                    <span>
                      <SearchIcon />
                    </span>
                    <input
                      type="search"
                      placeholder="Search for courses, lessons, etc.."
                      className="bg-slate-300 outline-none p-[0.5rem] text-sm"
                    />
                  </div>
                </form>
                <div className="h-10 w-10 flex items-center justify-center text-xl rounded-full bg-slate-300">
                  <NotificationIcon />
                </div>
                <div className="h-10 w-10 flex items-center justify-center text-xl rounded-full bg-slate-300">
                  {/* {data.imageProperties ? (
                  <img
                    src={data.imageProperties?.filename}
                    alt="profile picture"
                  />
                ) : ( */}
                  <span>
                    <ProfileIcon />
                  </span>
                  {/* )} */}
                </div>
              </div>
            </header>
          </section>
        </section>
      </>
    );
  }
};
