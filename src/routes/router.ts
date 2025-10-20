import {createBrowserRouter} from "react-router";
import Layout from "@/widgets/layout/Layout.tsx";
import WalkFinishPage from "@/pages/walk/finish/WalkFinish.tsx";
import ErrorPage from "@/pages/error/ErrorPage.tsx";
import NotFoundPage from "@/pages/error/NotFoundPage.tsx";
import Walk from "@/pages/walk/Walk.tsx";
import Ranking from "@/pages/ranking/Ranking.tsx";
import Home from "@/pages/home/Home.tsx";
import Member_emailaddress from "@/pages/member/Member_emailaddress.tsx";
import Member_certification from "@/pages/member/Member_certification.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        ErrorBoundary: ErrorPage,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "ranking",
                Component: Ranking,
            },
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
                path: "/member_emailaddress",
                Component: Member_emailaddress,
            },
            {
                path: "/member_certification",
                Component: Member_certification,
            },
        ]
    }
])

export default router;
