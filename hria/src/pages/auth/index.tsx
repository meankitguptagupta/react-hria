import React from "react";
import { Link } from "react-router-dom";

import FormSchema from "../../json-forms/login.json";
import { DynamicFormComponent } from "../../components/DynamicForm";
import { FormikHelpers } from "formik";
import { DataObject } from "../../components/DynamicForm/elements.interface";

const Login: React.FC = () => {
    const formRef = React.useRef<FormikHelpers<DataObject> | null>(null);

    const handleSubmit = () => {
        if (formRef.current) {
            // @ts-ignore
            const { values, isValid } = formRef.current;
            console.log("Form Values:", values);
            // Access the form values here
        }
    }

    return (
        <div className="login">
            <div className="fs-5 fw-semibold">Sign In</div>
            <p className="mb-4 text-sm fw-ssh setemibold">
                New here?&emsp;
                <Link className="text-link text-decoration-none text-sm" to="/signup">
                    Create Account
                </Link>
            </p>

            <DynamicFormComponent formData={FormSchema} formRef={formRef} />

            <div className="custom-control mb-1 text-end">
                <Link
                    to="/forgot-password"
                    className="text-link text-decoration-none text-sm"
                >
                    Forgot password?
                </Link>
            </div>

            <span className="btn btn-primary text-sm mb-4" onClick={handleSubmit}>
                Sign in
            </span>
        </div>
    );
};

export default Login;