import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./CSS/styleV3.css";
import App from "./App.jsx";
import Kyoto from "./KyotoV2.jsx";
import Cairo from "./CairoV2.jsx";
import Cusco from "./CuscoV2.jsx";
import Rome from "./RomeV2.jsx";
import Plug from "./components/PlugSlide.jsx";
import TravelTips from "./TravelTipsV2.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/kyoto/",
    element: <Kyoto />,
  },
  {
    path: "/rome/",
    element: <Rome />,
  },
  {
    path: "/cusco/",
    element: <Cusco />,
  },
  {
    path: "/cairo/",
    element: <Cairo />,
  },
  {
    path: "/traveltips/",
    element: <TravelTips />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
