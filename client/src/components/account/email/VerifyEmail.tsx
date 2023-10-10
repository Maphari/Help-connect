import React, { Dispatch } from "react";
import { RootState } from "../../../redux/store/student.store";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { hideEmailHandler } from "./VerifyEmail.function";
import { AnyAction } from "@reduxjs/toolkit";
import { SetStudentPin } from "../../../redux/slice/student.slice";
import { SetLecturerPin } from "../../../redux/slice/lecturer.slice";
import {failedNotification,successNotification} from "../../../global/ToastNotification.function"
import axios, { AxiosResponse } from "axios";

interface IDataToSend {
  username: string;
  email: string;
}

export const VerifyEmail: React.FC = () => {
  const studentData = useSelector((state: RootState) => state.student);
  const lecturerData = useSelector((state: RootState) => state.lecturer);
  const { studentID, studentUsername, studentEmail } = studentData;
  const { lecturerID, lecturerUsername, lecturerEmail } =
    lecturerData;
  const renderUsername: string = studentID
    ? studentUsername
    : lecturerID
    ? lecturerUsername
    : "Unknown";
  const renderEmail: string = studentID
    ? studentEmail
    : lecturerID
    ? lecturerEmail
    : "Unknown";
  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const HttpPostEmail: (data: object) => Promise<AxiosResponse> =
    async function (data: object) {
      const res: AxiosResponse = await axios.post(
        "/api/verify-email-pin",
        data
      );
      return res;
    };

  const navigateReplaceHandler: (route: string) => void = function (
    route: string
  ) {
    navigate(route, { replace: true });
  };

  const sendData: IDataToSend = {
    username: renderUsername,
    email: renderEmail,
  };

  const goToVerify: () => void = async () => {
    try {

      const res: Promise<AxiosResponse> = HttpPostEmail(sendData);
      const data = (await res).data;

      if (studentID) {
        dispatch(SetStudentPin(data.pin));
        successNotification(data.message)
        navigateReplaceHandler("/student/verify/email-pin");
      } else if (lecturerID) {
        dispatch(SetLecturerPin(data.pin))
        successNotification(data.message)
        navigateReplaceHandler("/lecturer/verify/email-pin");
      }
    } catch (error) {
      console.log(error)
      failedNotification("Internal server error!!");
    }
  };

  return (
    <section className="bg-opacity-80 h-screen w-full flex items-center justify-center">
      <section className="bg-white py-5 px-6 rounded drop-shadow-lg">
        <header className="mb-3">
          <h1 className="text-xl font-semibold text-blue-950">
            Please verify this email address
          </h1>
          <p className="text-sm opacity-50">
            Please know that we are doing this for security reasons
          </p>
        </header>
        <section className="flex flex-col gap-1">
          <p className="opacity-70 mb-2">Hi {renderUsername}</p>
          <p className="opacity-70 mb-2">Welcome to help connect 😎!</p>
          <p className="opacity-90 mb-3 text-sm">
            Please check you email inbox to verify your email address
            <br /> the email address is {hideEmailHandler(renderEmail)}
          </p>
          <p className="opacity-90 text-sm">From the team</p>
          <p className="opacity-90 text-sm">Help connect support team</p>
        </section>
        <section className="mt-5">
          <button
            type="submit"
            className="bg-blue-950 text-white p-2 rounded text-sm"
            onClick={goToVerify}
          >
            Verify email
          </button>
        </section>
      </section>
    </section>
  );
};
