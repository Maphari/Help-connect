import { createBrowserRouter } from "react-router-dom";
import { Landing, RegisterInformation, Register, Login } from "./App.imports";

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
]);

export default App;
