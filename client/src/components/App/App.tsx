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
  MoreInfoLecturer,
  MoreInfoStudent,
  VerifyEmailPin
} from "./App.imports";

const studentToken = localStorage.getItem("student-token");
const lecturerToken = localStorage.getItem("lecturer-token");
const helperToken = localStorage.getItem("helper-token");

const UnVerifiedRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      {/* HOME ROUTES */}
      <Route
        path="/"
        element={
          studentToken ? (
            <DashBoardStudent />
          ) : lecturerToken ? (
            <DashBoardLecturer />
          ) : helperToken ? (
            <DashboardService />
          ) : (
            <Landing />
          )
        }
      />

      {/* VERIFY EMAIL ROUTE  */}
      <Route path="/:id/verify/email" element={<VerifyEmail />} />
      <Route path="/:id/verify/email-pin" element={<VerifyEmailPin /> } />

      {/* CHOICES ROUTES */}
      <Route path="/account/login-choice" element={<AccountOptionsLogin />} />
      <Route path="/account/register-choice" element={<AccountOptionsRegister />} />

      {/* STUDENT ROUTES */}
      <Route path="/student/register-account" element={studentToken ? <DashBoardStudent /> : <StudentRegister />} />
      <Route path="/student/login-account" element={studentToken ? <DashBoardStudent /> :<StudentLogin />} />
      <Route path="/student/more-information" element={<MoreInfoStudent />} />

      {/* LECTURER ROUTES */}
      <Route path="/lecturer/register-account" element={lecturerToken ? <DashBoardLecturer /> : <LecturerRegister />} />
      <Route path="/lecturer/login-account" element={lecturerToken ? <DashBoardLecturer /> : <LecturerLogin />} />
      <Route path="/lecturer/more-information" element={<MoreInfoLecturer />} />

      {/* HELPER ROUTES */}
      <Route path="/helper/register-account" element={helperToken ? <DashboardService /> : <RegisterService />} />
      <Route path="/helper/login-account" element={helperToken ? <DashboardService /> : <LoginService />} />
    </Routes>
  );
};

export default function App() {
  return <UnVerifiedRoutes />;
}
