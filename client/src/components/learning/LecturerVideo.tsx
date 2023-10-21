import { FC, useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { Header } from "../dashboard/Header";
import { DashboardUI } from "../UI/DashboardUI";

export const LecturerVideo: FC = () => {
  const { lecturer } = useContext<IDataObject>(FetchUserDataContext);

  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div>
            <Header
              header="Lecturer Video"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(lecturer.firstName)}
            />
          </div>
        </header>
      </DashboardUI>
    </>
  );
};
