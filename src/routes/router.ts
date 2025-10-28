import {createBrowserRouter} from "react-router";
import Layout from "@/widgets/layout/Layout.tsx";
import WalkFinishPage from "@/pages/walk/finish/WalkFinish.tsx";
import ErrorPage from "@/pages/error/ErrorPage.tsx";
import NotFoundPage from "@/pages/error/NotFoundPage.tsx";
import Walk from "@/pages/walk/Walk.tsx";

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
                        index: true,
                        Component: Walk
                    },
                    {
                        path: "finish",
                        Component: WalkFinishPage,
                    }
                ]
            },
            {
                path: "*",
                Component: NotFoundPage,
            },
            {
                path: "/walk",

            }
        ]
    }
])

export default router;