import {createBrowserRouter} from "react-router-dom";
import SignIn from "../pages/signin/SignIn.tsx";
import Member_emailaddress from "../pages/member/Member_emailaddress.tsx";
import Member_certification from "../pages/member/Member_certification.tsx";
const router = createBrowserRouter([
    {
        path: "/signin",
        Component: SignIn,
    },
    {
        path: "/member_emailaddress",
        Component: Member_emailaddress
    },
    {
        path: "/member_certification",
        Component: Member_certification,
    }
])

export default router;