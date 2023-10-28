import { FC, useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { DashboardHeader } from "../UI/DashboardHeader";
import { DashboardUI } from "../UI/DashboardUI";

export const StudentNotification: FC = () => {
  const { student, google } = useContext<IDataObject>(FetchUserDataContext);
  const tokenStudent = localStorage.getItem("student-token");
  const googleTokenStudent = localStorage.getItem("student-google");

  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div>
            <DashboardHeader
              header="Notification"
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
        </header>
      </DashboardUI>
    </>
  );
};
