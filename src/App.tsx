import {RouterProvider} from "react-router";
import router from "./routes/router.ts";

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
