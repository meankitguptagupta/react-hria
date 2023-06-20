import React from 'react';
import { Link } from 'react-router-dom';
import FormSchema from '../../json-forms/login.json';
import { DataObject } from '../../components/DynamicForm/elements.interface';
import { FormikHelpers } from 'formik';
import { DynamicFormComponent } from '../../components/DynamicForm';

const Signup = () => {
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
        <div className="signup">
            <div className="fs-5 fw-semibold">Register</div>
            <p className='mb-4 text-sm fw-semibold'>already registered? <Link className='text-link text-decoration-none text-sm' to="/">LoginIn</Link></p>

            <DynamicFormComponent formData={FormSchema} formRef={formRef} />

            <span className="btn btn-primary text-sm mb-4" onClick={handleSubmit}>
                Signup
            </span>
        </div>
    );
};

export default Signup;
