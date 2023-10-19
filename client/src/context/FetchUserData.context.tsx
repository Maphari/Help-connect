import React, { useState, useEffect, createContext, ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

interface IContext {
  children: ReactNode;
}

interface IGetUserData {
  token: string | null;
}

export const FetchUserDataContext = createContext<object>({});
export const FetchUserDataProvider: React.FC<IContext> = ({ children }) => {
  const [studentData, setStudentData] = useState<Array<string>>([]);
  const [lecturerData, setLecturerData] = useState<Array<string>>([]);
  const studentToken: string | null = localStorage.getItem("student-token");
  const lecturerToken: string | null = localStorage.getItem("lecturer-token");
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const option: "student" | "lecturer" | null = studentToken
      ? "student"
      : lecturerToken
      ? "lecturer"
      : null;

    const sendUserData: IGetUserData = {
      token: studentToken || lecturerToken,
    };

    function navigateUser(path: string): void {
      navigate(path, { replace: true });
    }

    async function HttpGetUsersData() {
      if (studentToken || lecturerToken) {
        const response: AxiosResponse = await axios.post(
          "/api/fetch-data",
          sendUserData
        );
        switch (option) {
          case "student":
            setStudentData(response.data);
            navigateUser("/student/dashboard");
            break;
          case "lecturer":
            setLecturerData(response.data);
            navigateUser("/lecturer/dashboard");
            break;
          default:
            localStorage.clear();
            navigateUser("/account/login-choice");
            break;
        }
      }
    }

    HttpGetUsersData();
  }, [navigate, studentToken, lecturerToken]);

  return (
    <FetchUserDataContext.Provider value={{ studentData, lecturerData }}>
      {children}
    </FetchUserDataContext.Provider>
  );
};
