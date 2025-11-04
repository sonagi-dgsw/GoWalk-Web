import { createBrowserRouter } from "react-router";
import Ranking from "../pages/ranking/Ranking";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "ranking",
    element: <Ranking />,
  },
]);

export default router;