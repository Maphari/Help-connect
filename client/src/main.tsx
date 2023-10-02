import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import "./sass/main.scss"

import { RouterProvider } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>,
)
