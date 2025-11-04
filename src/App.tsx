import { createBrowserRouter, RouterProvider } from "react-router";
import Ranking from "./pages/ranking/Ranking";
import Home from "./pages/home/Home";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "ranking",
    element: <Ranking />,
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
