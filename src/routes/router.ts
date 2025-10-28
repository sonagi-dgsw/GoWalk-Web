import {createBrowserRouter} from "react-router";
import SignIn from "../pages/signin/SignIn.tsx";
import Layout from "../widgets/layout/Layout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/signin",
                Component: SignIn,
            },
        ]
    }
])

export default router;