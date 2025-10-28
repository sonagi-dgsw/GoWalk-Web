import {createBrowserRouter} from "react-router";
import SignIn from "../pages/signin/SignIn.tsx";
import Layout from "../widgets/layout/Layout.tsx";
import WalkFinishPage from "../pages/walk/finish/WalkFinish.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "signin",
                Component: SignIn,
            },
            {
                path: "walk",
                children: [
                    {
                        path: "finish",
                        Component: WalkFinishPage,
                    }
                ]
            }
        ]
    }
])

export default router;