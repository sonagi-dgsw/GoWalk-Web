import { createBrowserRouter } from "react-router";
import Layout from "@/widgets/layout/Layout.tsx";
import ErrorPage from "@/pages/error/ErrorPage.tsx";
import Loading from "@/widgets/loading/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        ErrorBoundary: ErrorPage,
        children: [
            {
                index: true,
                lazy: async () => ({
                    Component: (await import("@/pages/home/Home.tsx")).default,
                }),
            },
            {
                path: "ranking",
                lazy: async () => ({
                    Component: (await import("@/pages/ranking/Ranking.tsx")).default,
                }),
            },
            {
                path: "walk",
                children: [
                    {
                        index: true,
                        lazy: async () => ({
                            Component: (await import("@/pages/walk/Walk.tsx")).default,
                        }),
                    },
                    {
                        path: "finish",
                        lazy: async () => ({
                            Component: (await import("@/pages/walk/finish/WalkFinish.tsx")).default,
                        }),
                    },
                ],
            },
            {
                path: "signin",
                lazy: async () => ({
                    Component: (await import("@/pages/signin/SignIn.tsx")).default,
                }),
            },

            //  Member routes
            {
                path: "member_emailaddress",
                lazy: async () => ({
                    Component: (await import("@/pages/member/Member_emailaddress.tsx")).default,
                }),
            },
            {
                path: "member_certification",
                lazy: async () => ({
                    Component: (await import("@/pages/member/Member_certification.tsx")).default,
                }),
            },
            {
                path: "member_name",
                lazy: async () => ({
                    Component: (await import("@/pages/member/Member_name.tsx")).default,
                }),
            },
            {
                path: "member_petname",
                lazy: async () => ({
                    Component: (await import("@/pages/member/Member_petname.tsx")).default,
                }),
            },
            {
                path: "member_petsort",
                lazy: async () => ({
                    Component: (await import("@/pages/member/Member_petsort.tsx")).default,
                }),
            },
            {
                path: "member_petage",
                lazy: async () => ({
                    Component: (await import("@/pages/member/Member_petage.tsx")).default,
                }),
            },
            {
                path: "member_petweight",
                lazy: async () => ({
                    Component: (await import("@/pages/member/Member_petweight.tsx")).default,
                }),
            },
            {
                path: "member_gender",
                lazy: async () => ({
                    Component: (await import("@/pages/member/Member_gender.tsx")).default,
                }),
            },

            // Not Found
            {
                path: "*",
                lazy: async () => ({
                    Component: (await import("@/pages/error/NotFoundPage.tsx")).default,
                }),
            },
        ],
    },
]);

export default router;
