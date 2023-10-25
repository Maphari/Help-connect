import { FC, useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { DashboardHeader } from "../UI/DashboardHeader";
import { DashboardUI } from "../UI/DashboardUI";

export const StudentSupport: FC = () => {
  const { student } = useContext<IDataObject>(FetchUserDataContext);

  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div>
            <DashboardHeader
              header="Help & Support"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(student.firstName)}
            />
          </div>
        </header>
      </DashboardUI>
    </>
  );
};
