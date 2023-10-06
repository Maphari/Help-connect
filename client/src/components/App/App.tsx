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
  DashBoardLecturer
} from "./App.imports";



export default function App() {
  const studentToken = localStorage.getItem("student-token")
  const lecturerToken = localStorage.getItem("lecturer-token")
  // const helperToken = localStorage.getItem("helper-token")

  return (
    <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={studentToken ? <DashBoardStudent/>: lecturerToken ? <DashBoardLecturer /> : <Landing />} />
        {/* CHOICES ROUTES */}
        <Route path="/account/register-choice" element={<AccountOptionsRegister />} />
        <Route path="/account/login-choice" element={<AccountOptionsLogin />} />
        {/* STUDENT ROUTES */}
        {!studentToken && <Route path="/student/register-account" element={<StudentRegister />} />}
        {!studentToken && <Route path="/student/login-account" element={<StudentLogin />} />}
        {/* LECTURER ROUTES */}
        {!lecturerToken && <Route path="/lecturer/register-account" element={<LecturerRegister />} />}
        {!studentToken && <Route path="/lecturer/login-account" element={<LecturerLogin />} />}
        {/* HELPER ROUTES */}
    </Routes>
  )
}

