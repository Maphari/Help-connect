import { FC } from "react";
import { SideNavigation } from "../navigation/SideNavigation";

export const Learning: FC = () => {
  return (
    <>
      <section className="dashboard-container">
        <SideNavigation />

        <section className="dashboard-container__main rounded-l-[4rem] p-20"></section>
      </section>
    </>
  );
};
