import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginFormSchema from '../../json-forms/login.json';
import DynamicFormComponent from '../../components/DynamicForm';
import { FormDataObject } from '../../components/DynamicForm/elements.interface';

const Signup = () => {
    const [submittedValues, setSubmittedValues] = useState<FormDataObject>({});

    const handleSubmit = (values: FormDataObject) => {
        console.log('Submitted values:', values);
        setSubmittedValues(values);
    };

    return (
        <div className="signup">
            <div className="fs-5 fw-semibold">Register</div>
            <p className='mb-4 text-sm fw-semibold'>already registered? <Link className='text-link text-decoration-none text-sm' to="/">LoginIn</Link></p>

            <DynamicFormComponent formData={LoginFormSchema} setFormValues={handleSubmit} />

            {/* <button className="btn btn-primary text-sm mb-4">Submit</button> */}

            {/* Display submitted values */}
            {Object.keys(submittedValues).length > 0 && (
                <div>
                    <h2>Submitted Values:</h2>
                    <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Signup;
