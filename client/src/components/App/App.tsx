import { createBrowserRouter } from "react-router-dom";
import {
  Landing,
  RegisterInformation,
  Register,
  Login,
  LecturerRegister,
  LecturerLogin,
  DashboardLecture,
} from "./App.imports";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/register-information",
    element: <RegisterInformation />,
  },
  {
    path: "/register-account",
    element: <Register />,
  },
  {
    path: "/login-account",
    element: <Login />,
  },
  {
    path: "/lecturer-register-account",
    element: <LecturerRegister />,
  },
  {
    path: "/lecturer-login-account",
    element: <LecturerLogin />,
  },
  {
    path: "/lecturer-dashboard",
    element: <DashboardLecture />,
  },
]);

export default App;
