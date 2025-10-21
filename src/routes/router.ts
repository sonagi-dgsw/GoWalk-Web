import {createBrowserRouter} from "react-router";
import SignIn from "../pages/signin/SignIn.tsx";
import Walk from "../pages/walk/Walk.tsx";

const router = createBrowserRouter([
    {
        path: "/signin",
        Component: SignIn,
    },
    {
        path: "/walk",
        Component: Walk,
    }
])

export default router;