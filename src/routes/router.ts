import {createBrowserRouter} from "react-router";
import SignIn from "../pages/signin/SignIn.tsx";

const router = createBrowserRouter([
    {
        path: "/signin",
        Component: SignIn,
    },
])

export default router;