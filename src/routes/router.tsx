import { createBrowserRouter } from "react-router";
import Ranking from "../pages/ranking/Ranking";

const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "ranking",
    element: <Ranking />,
  },
]);

export default router;