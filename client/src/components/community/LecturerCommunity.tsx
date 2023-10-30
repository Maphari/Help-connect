import { FC } from "react";
import { DashboardUI } from "../UI/DashboardUI";
import { PostComponent } from "./Post";

export const LecturerCommunity: FC = () => {

  return (
    <>
      <DashboardUI>
        <PostComponent />
      </DashboardUI>
    </>
  );
};
