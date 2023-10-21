import { FC } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { LinkNav } from "./LinkNav";
import LOGO from "../../assets/favicon.ico";
import { BiSolidDashboard as DashboardIcon } from "react-icons/bi";
import { BsCameraVideoFill as LearningIcon } from "react-icons/bs";
import {
  IoNotifications as NotificationIcon,
  IoSettings as SettingsIcon,
  IoLogOut as LogoutIcon,
} from "react-icons/io5";
import { BsFillCalendarCheckFill as PlannerIcon } from "react-icons/bs";
import { MdContactSupport as SupportIcon } from "react-icons/md";
import { HiUserGroup as CommunityIcon } from "react-icons/hi2";
import HELP_CONNECT_VERSION from "../../../package.json";

export const SideNavigation: FC = () => {
  const studentToken = localStorage.getItem("student-token");
  const lecturerToken = localStorage.getItem("lecturer-token");
  const navigate: NavigateFunction = useNavigate();

  function logoutUser() {
    localStorage.clear();
    navigate("/account/login-choice", { replace: true });
  }

  return (
    <>
      <aside className="dashboard-container__aside">
        <header className="flex items-center gap-2">
          <img src={LOGO} alt="logo" className="h-8 w-8 object-contain" />
          <h2 className="font-medium">Help Connect</h2>
        </header>

        <section className="mt-10">
          <h1 className="text-sm">Main</h1>
          <ul>
            <li className="mt-2">
              <LinkNav path="/dashboard" name="Dashboard">
                <DashboardIcon />
              </LinkNav>
            </li>
            <li className="mt-2">
              <LinkNav
                path="/learning"
                name={
                  studentToken ? "Learning" : lecturerToken ? "My videos" : ""
                }
              >
                <LearningIcon />
              </LinkNav>
            </li>
            <li className="mt-2">
              <LinkNav path="/planning" name="Planner">
                <span className="text-[0.9rem]">
                  <PlannerIcon />
                </span>
              </LinkNav>
            </li>
            <li className="mt-2">
              <LinkNav path="/notification" name="Notifications">
                <NotificationIcon />
              </LinkNav>
            </li>
            <li className="mt-2">
              <LinkNav path="/community" name="Community">
                <CommunityIcon />
              </LinkNav>
            </li>
            <li className="mt-2">
              <LinkNav path="/setting" name="Settings">
                <SettingsIcon />
              </LinkNav>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h1 className="text-sm">More settings</h1>
          <ul>
            <li className="mt-2">
              <LinkNav path="/support" name="Help & support">
                <SupportIcon />
              </LinkNav>
            </li>
            <li className="mt-2">
              <LinkNav path="" name="Logout" onClick={logoutUser.bind(this)}>
                <LogoutIcon />
              </LinkNav>
            </li>
            <li className="mt-7 text-xs opacity-30">
              Help connect version {HELP_CONNECT_VERSION.version}
            </li>
          </ul>
        </section>
      </aside>
    </>
  );
};
