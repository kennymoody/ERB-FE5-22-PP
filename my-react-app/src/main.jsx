import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./CSS/styleV2.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/kyoto/",
    element: <kyoto />,
  },
  {
    path: "/rome/",
    element: <rome />,
  },
  {
    path: "/cusco/",
    element: <cusco />,
  },
  {
    path: "/cairo/",
    element: <cairo />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
