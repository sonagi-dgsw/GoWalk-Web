import {createBrowserRouter} from "react-router";
import SignIn from "@/pages/signin/SignIn.tsx";
import Layout from "@/widgets/layout/Layout.tsx";
import WalkFinishPage from "@/pages/walk/finish/WalkFinish.tsx";

import Member_emailaddress from "@/pages/member/Member_emailaddress.tsx";
import Member_certification from "@/pages/member/Member_certification.tsx";
import Member_name from "@/pages/member/Member_name.tsx";
import Member_petname from "@/pages/member/Member_petname.tsx";
import Member_petsort from "@/pages/member/Member_petsort.tsx";
import Member_petage from "@/pages/member/Member_petage.tsx";

import ErrorPage from "@/pages/error/ErrorPage.tsx";
import NotFoundPage from "@/pages/error/NotFoundPage.tsx";
import Walk from "@/pages/walk/Walk.tsx";
import Ranking from "@/pages/ranking/Ranking.tsx";
import Home from "@/pages/home/Home.tsx";

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
                path: "/signin",
                Component: SignIn,
            },
            {
                path: "/member_emailaddress",
                Component: Member_emailaddress,
            },
            {
                path: "/member_certification",
                Component: Member_certification,
            },
            {
                path: "/member_name",
                Component: Member_name,
            },
            {
                path: "/member_petname",
                Component: Member_petname,
            },
            {
                path: "/member_petsort",
                Component: Member_petsort,
            },
            {
                path: "/member_petage",
                Component: Member_petage,
            },
            {
                path: "*",
                Component: NotFoundPage,
            },
        ]
    }
])

export default router;
