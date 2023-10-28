import { FC, useContext, useState } from "react";
import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { IDataObject } from "../../context/Context.config";
import { greetUserBasedOnTime } from "../../global/Functions.global";
import { DashboardHeader } from "../UI/DashboardHeader";
import { DashboardUI } from "../UI/DashboardUI";
import {
  BsCameraVideoFill as LiveTeachingIcon,
  BsFillFileEarmarkArrowDownFill as VideoUploadIcon,
} from "react-icons/bs";
import { UploadContainer } from "./UploadContainer";
import { LecturerLive } from "./LecturerLive";

export const LecturerVideo: FC = () => {
  const { lecturer } = useContext<IDataObject>(FetchUserDataContext);
  const [isLivePage, setIsLivePage] = useState<boolean>(false);
  const [isUploadPage, setIsUploadPage] = useState<boolean>(true);

  const openLivePage: () => void = function () {
    setIsLivePage(true);
    setIsUploadPage(false);
  };

  const openUploadPage: () => void = function () {
    setIsLivePage(false);
    setIsUploadPage(true);
  };

  return (
    <>
      <DashboardUI>
        <header className="flex items-center justify-between">
          <div className="flex items-center flex-wrap justify-between w-full">
            <DashboardHeader
              header="Content Creator"
              stylesHeader="text-2xl mb-1 font-bold"
              stylesSubHeader="text-xs opacity-50"
              subHeader={greetUserBasedOnTime(lecturer.firstName)}
            />
            <div className="flex items-center gap-2 bg-slate-200 p-1 rounded-full transition-all duration-700 ease-linear">
              <div
                onClick={openUploadPage}
                className={`flex items-center gap-2 ${
                  isUploadPage ? "bg-blue-500 text-white" : ""
                } py-2 px-3 rounded-full transition-all duration-700 ease-linear hover:cursor-pointer`}
              >
                <span>
                  <VideoUploadIcon />
                </span>
                {/* <span>Upload Video</span> */}
              </div>
              <div
                onClick={openLivePage}
                className={`flex items-center gap-2 ${
                  isLivePage ? "bg-blue-500 text-white" : ""
                } py-2 px-3 rounded-full transition-all duration-700 ease-linear hover:cursor-pointer`}
              >
                <span>
                  <LiveTeachingIcon />
                </span>
                {/* <span>Teach live</span> */}
              </div>
            </div>
          </div>
        </header>
        <section className="mt-10 flex gap-3 flex-wrap">
          {isLivePage ? (
            <LecturerLive />
          ) : isUploadPage ? (
            <UploadContainer />
          ) : null}
        </section>
      </DashboardUI>
    </>
  );
};
