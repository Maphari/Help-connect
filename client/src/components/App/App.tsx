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
  // DashBoardStudent,
  // DashboardService,
  RegisterService,
  LoginService,
  // DashBoardLecturer,
  VerifyEmail,
  MoreInfoLecturer,
  MoreInfoStudent,
  VerifyEmailPin,
  DashBoardHandler,
  Learning
} from "./App.imports";

const studentToken = localStorage.getItem("student-token");
const lecturerToken = localStorage.getItem("lecturer-token");
const helperToken = localStorage.getItem("helper-token");

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      {/* HOME ROUTES */}
      <Route
        path="/"
        element={studentToken || helperToken || lecturerToken ? <DashBoardHandler /> : <Landing />}
      />
      {/* DASHBOARD ROUTES */}
      <Route
        path="/dashboard"
        element={studentToken || helperToken || lecturerToken ? <DashBoardHandler /> : <Landing />}
      />
      {/* DASHBOARD STUDENT ROUTES */}
      <Route
        path="/learning"
        element={studentToken ? <Learning /> : <Landing />}
      />
      {/* VERIFY EMAIL ROUTE  */}
      <Route path="/:id/verify/email" element={<VerifyEmail />} />
      <Route path="/:id/verify/email-pin" element={<VerifyEmailPin /> } />

      {/* CHOICES ROUTES */}
      <Route path="/account/login-choice" element={studentToken || helperToken || lecturerToken ? <DashBoardHandler /> : <AccountOptionsLogin />} />
      <Route path="/account/register-choice" element={studentToken || helperToken || lecturerToken ? <DashBoardHandler /> :<AccountOptionsRegister />} />

      {/* STUDENT ROUTES */}
      <Route path="/student/register-account" element={studentToken ?  <DashBoardHandler />: <StudentRegister />} />
      <Route path="/student/login-account" element={studentToken ?  <DashBoardHandler /> :<StudentLogin />} />
      <Route path="/student/more-information" element={<MoreInfoStudent />} />

      {/* LECTURER ROUTES */}
      <Route path="/lecturer/register-account" element={lecturerToken ?  <DashBoardHandler />: <LecturerRegister />} />
      <Route path="/lecturer/login-account" element={lecturerToken ?  <DashBoardHandler /> : <LecturerLogin />} />
      <Route path="/lecturer/more-information" element={<MoreInfoLecturer />} />

      {/* HELPER ROUTES */}
      <Route path="/helper/register-account" element={helperToken ?  <DashBoardHandler /> : <RegisterService />} />
      <Route path="/helper/login-account" element={helperToken ?  <DashBoardHandler /> : <LoginService />} />
    </Routes>
  );
};

export default function App() {
  return <AppRouter />;
}
