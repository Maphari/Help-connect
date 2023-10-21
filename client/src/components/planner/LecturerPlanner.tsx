import { FC, useContext } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { Header } from "../dashboard/Header";
import { DisplayCalendar } from "../dashboard/DisplayCalendar";
import { DashboardUI } from "../UI/DashboardUI";

export const LecturerPlanning: FC = () => {
  const { lecturer } = useContext<IDataObject>(FetchUserDataContext);

  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div>
            <Header
              header="Planning"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(lecturer.firstName)}
            />
          </div>
        </header>

        <section className="mt-10">
          <DisplayCalendar />
        </section>
      </DashboardUI>
    </>
  );
};
