import React, { useContext } from "react";
import { DashboardUI } from "../UI/DashboardUI";
import { DashboardHeader } from "../UI/DashboardHeader";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { IDataObject } from "../../context/Context.config";
import { FetchUserDataContext } from "../../context/FetchUserData.context";

export const StudentLive: React.FC = () => {
  const { student } = useContext<IDataObject>(FetchUserDataContext);

  return (
    <DashboardUI>
      <header className="flex items-center justify-between">
        <div>
          <DashboardHeader
            header="Learning"
            stylesHeader="text-2xl mb-1 font-bold"
            stylesSubHeader="text-xs opacity-50"
            subHeader={greetUserBasedOnTime(student.firstName)}
          />
        </div>
      </header>
      <h1>hello</h1>
    </DashboardUI>
  );
};
