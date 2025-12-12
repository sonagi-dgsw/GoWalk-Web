import { createBrowserRouter } from "react-router";
import SignIn from "../pages/signin/SignIn.tsx";
import Walk from "../pages/walk/Walk.tsx";
import WalkStart from "../pages/walk_start/WalkStart.tsx";

const router = createBrowserRouter([
    {
        path: "/signin",
        Component: SignIn,
    },
    {
        path: "/walk",
        Component: Walk,
    },

    {
        path: "/walk/start",
        Component: WalkStart,
    },
]);

export default router;