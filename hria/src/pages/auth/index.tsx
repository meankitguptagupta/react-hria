import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormSchema from '../../json-forms/login.json';
import DynamicFormComponent from '../../components/DynamicForm';

const Login: React.FC = () => {
    const [formValues, setFormValues] = useState({})

    const onSubmit = () => {
        console.info('submit clicked', formValues)
    }

    return (
        <div className="login">
            <div className="fs-5 fw-semibold">Sign In</div>
            <p className="mb-4 text-sm fw-semibold">
                New here? <Link className="text-link text-decoration-none text-sm" to="/signup">Create Account</Link>
            </p>

            {/* <DynamicFormComponent formData={FormSchema} setFormValues={setFormValues} /> */}

            <div className="custom-control mb-1 text-end">
                <Link to="/forgot-password" className="text-link text-decoration-none text-sm">Forgot password?</Link>
            </div>
            <button className="btn btn-primary text-sm mb-4" onClick={onSubmit}>Sign in</button>
        </div>
    );
};

export default Login;
