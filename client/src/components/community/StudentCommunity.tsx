import { FC } from "react";
import { DashboardUI } from "../UI/DashboardUI";
import { PostComponent } from "./Post";

export const StudentCommunity: FC = () => {
  return (
    <>
      <DashboardUI>
        <PostComponent />
      </DashboardUI>
    </>
  );
};
