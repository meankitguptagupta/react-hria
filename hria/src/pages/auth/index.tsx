import React from "react";
import { Link } from "react-router-dom";

import FormSchema from "../../json-forms/login.json";
import { DynamicFormComponent } from "../../components/DynamicForm";
import { DataObject } from "../../components/DynamicForm/elements.interface";

const Login: React.FC = () => {

    const handleFormSubmit = (formData: DataObject) => {
        // Perform any actions with the form data
        console.log(formData);
    };


    return (
        <div className="login">
            <div className="fs-5 fw-semibold">Sign In</div>
            <p className="mb-4 text-sm fw-ssh setemibold">
                New here?&emsp;
                <Link className="text-link text-decoration-none text-sm" to="/signup">
                    Create Account
                </Link>
            </p>

            <DynamicFormComponent formData={FormSchema} formId="login-form" onSubmit={handleFormSubmit} />

            <div className="custom-control mb-1 text-end">
                <Link
                    to="/forgot-password"
                    className="text-link text-decoration-none text-sm"
                >
                    Forgot password?
                </Link>
            </div>

            <button className="btn btn-primary text-sm mb-4" type="submit" form="login-form">
                Log In
            </button>

        </div>
    );
};

export default Login;