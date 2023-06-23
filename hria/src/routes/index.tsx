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
    Qualification = lazy(() => import('../pages/qualifications'))

export const router = createBrowserRouter([
    {
        path: "",
        children: [{
            path: "/",
            element: <AuthLayout />,
            children: [{
                path: '',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <Signup />,
            }, {
                path: 'forgot-password',
                element: <ForgotPassword />,
            }]
        },
        {
            path: "student",
            element: <LayoutComponent />,
            children: [
                {
                    path: "",
                    element: <StudentProfile />
                },
                {
                    path: "programs",
                    element: <SelectProgram />
                }, {
                    path: "qualifications",
                    element: <Qualification />
                }, //{
                //     path: "document-upload",
                //     element: <StudentProfile />
                // }, {
                //     path: "select-facilities",
                //     element: <StudentProfile />
                // }, {
                //     path: "submit",
                //     element: <StudentProfile />
                // }, {
                //     path: "download-&-print",
                //     element: <StudentProfile />
                // }
            ]
        },
        ],
    },
]);