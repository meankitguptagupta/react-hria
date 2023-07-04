import { lazy } from 'react';

import {
    createBrowserRouter
} from "react-router-dom";

const AuthLayout = lazy(() => import('../components/auth')),
    Login = lazy(() => import('../pages/auth')),
    Signup = lazy(() => import('../pages/auth/Signup')),
    ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword')),
    LayoutComponent = lazy(() => import('../components/layout')),
    StudentProfile = lazy(() => import('../pages/student-profile')),
    SelectProgram = lazy(() => import('../pages/select-program')),
    Qualification = lazy(() => import('../pages/qualifications')),
    Documents = lazy(() => import('../pages/documents')),
    Facilities = lazy(() => import('../pages/facilities'));

export const router = createBrowserRouter([
    {
        path: "",
        children: [{
            path: "/",
            element: <AuthLayout />,
            children: [{
                path: '',
                element: <Login />,
            }, {
                path: 'signup',
                element: <Signup />,
            }, {
                path: 'forgot-password',
                element: <ForgotPassword />,
            }]
        }, {
            path: "student",
            element: <LayoutComponent />,
            children: [{
                path: "",
                element: <StudentProfile />
            }, {
                path: "programs",
                element: <SelectProgram />
            }, {
                path: "qualifications",
                element: <Qualification />
            }, {
                path: "uploads",
                element: <Documents />
            }, {
                path: "facilities",
                element: <Facilities />
            }, {
                path: "submit",
                element: <StudentProfile />
            }, {
                path: "download-&-print",
                element: <StudentProfile />
            }]
        }],
    },
]);