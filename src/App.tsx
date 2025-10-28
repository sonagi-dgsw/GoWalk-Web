import { createBrowserRouter, RouterProvider } from "react-router";
import Ranking from "./pages/ranking/Ranking";


const appRouter = createBrowserRouter([
  {
    path: "/",
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
