// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Landing,
  StudentRegister,
  StudentLogin,
  LecturerRegister,
  LecturerLogin,
  PageNotFound,
  AccountOptionsLogin,
  AccountOptionsRegister,
  DashBoardStudent,
  DashboardService,
  RegisterService,
  LoginService,
  DashBoardLecturer,
  VerifyEmail,
} from "./App.imports";

const studentToken = localStorage.getItem("student-token");
const lecturerToken = localStorage.getItem("lecturer-token");
const helperToken = localStorage.getItem("helper-token");

const UnVerifiedRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Landing />} />
      
      {/* DASHBOARD ROUTES */}
      <Route
        path="/dashboard"
        element={
          studentToken ? (
            <DashBoardStudent />
          ) : lecturerToken ? (
            <DashBoardLecturer />
          ) : helperToken ? (
            <DashboardService />
          ) : null
        }
      />

      {/* VERIFY EMAIL ROUTE  */}
      <Route path="/verify/email" element={<VerifyEmail />} />

      {/* CHOICES ROUTES */}
      <Route path="/account/login-choice" element={<AccountOptionsLogin />} />
      <Route
        path="/account/register-choice"
        element={<AccountOptionsRegister />}
      />

      {/* STUDENT ROUTES */}
      <Route path="/student/register-account" element={<StudentRegister />} />
      <Route path="/student/login-account" element={<StudentLogin />} />

      {/* LECTURER ROUTES */}
      <Route path="/lecturer/register-account" element={<LecturerRegister />} />
      <Route path="/lecturer/login-account" element={<LecturerLogin />} />

      {/* HELPER ROUTES */}
      <Route path="/helper/register-account" element={<RegisterService />} />
      <Route path="/helper/login-account" element={<LoginService />} />
      
    </Routes>
  );
};

export default function App() {
  return <UnVerifiedRoutes />;
}
