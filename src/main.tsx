import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import NavBar from "./routes/NavBar.tsx";
import App from "./routes/App.tsx";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/letters',
        element: <div>Placeholder for Letters game</div>,
      },
      {
        path: '/numbers',
        element: <div>Placeholder for Numbers game</div>,
      },
      {
        path: '/finale',
        element: <div>Move current component into its own component here</div>,
      },
      {
        path: '/about',
        element: <div>About section to go here</div>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
