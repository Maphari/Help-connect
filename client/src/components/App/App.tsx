import { createBrowserRouter } from "react-router-dom"
import { Landing } from "./App.imports"


const App = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  }
])

export default App
