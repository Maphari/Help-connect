import React, { useState, useEffect, createContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  IContext,
  IDataObject,
  IGetUserData,
  ContextDataStructure,
} from "./Context.config";
import axios, { AxiosResponse } from "axios";

export const FetchUserDataContext: React.Context<IDataObject> =
  createContext<IDataObject>(ContextDataStructure);
export const FetchUserDataProvider: React.FC<IContext> = ({ children }) => {
  const [studentData, setStudentData] = useState<object>({});
  const [lecturerData, setLecturerData] = useState<object>({});
  const studentToken: string | null = localStorage.getItem("student-token");
  const lecturerToken: string | null = localStorage.getItem("lecturer-token");
  const navigate: NavigateFunction = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const sendUserData: IGetUserData = {
      token: studentToken || lecturerToken,
    };

    // function navigateUser(path: string): void {
    //   navigate(path, { replace: true });
    // }

    async function HttpGetUsersData() {
      setIsLoading(true);
      if (studentToken || lecturerToken) {
        const response: AxiosResponse = await axios.post(
          "/api/fetch-data",
          sendUserData
        );

        if (studentToken) {
          setStudentData(response.data);
          // navigateUser("/dashboard");
        } else if (lecturerToken) {
          setLecturerData(response.data);
          // navigateUser("/dashboard");
        } else {
          localStorage.clear();
        }
      }
    }
    HttpGetUsersData();
    setIsLoading(false);
  }, [navigate, studentToken, lecturerToken]);

  return (
    <FetchUserDataContext.Provider
      value={{ student: studentData, lecturer: lecturerData, isLoading }}
    >
      {children}
    </FetchUserDataContext.Provider>
  );
};
