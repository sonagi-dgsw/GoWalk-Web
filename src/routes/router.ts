import {createBrowserRouter} from "react-router";
import Layout from "../widgets/layout/Layout.tsx";
import WalkFinishPage from "../pages/walk/finish/WalkFinish.tsx";
import ErrorPage from "@/pages/error/ErrorPage.tsx";
import NotFoundPage from "@/pages/error/NotFoundPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        ErrorBoundary: ErrorPage,
        children: [
            {
                path: "walk",
                children: [
                    {
                        path: "finish",
                        Component: WalkFinishPage,
                    }
                ]
            },
            {
                path: "*",
                Component: NotFoundPage,
            }
        ]
    }
])

export default router;