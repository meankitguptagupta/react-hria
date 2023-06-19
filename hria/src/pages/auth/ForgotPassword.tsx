import { Link } from 'react-router-dom';
import FormSchema from '../../json-forms/forgot-password.json';
import DynamicFormComponent from '../../components/DynamicForm';
import { useState } from 'react';

const ForgotPassword = () => {

    const [formValues, setFormValues] = useState({})

    const onSubmit = () => {
        console.info('submit clicked', formValues)
    }

    return (
        <div className="login">
            <div className="fs-5 fw-semibold">Forgot Password</div>
            <p className='mb-4 text-sm fw-semibold'>already registered? <Link className='text-link text-decoration-none text-sm' to="/">LoginIn</Link></p>

            {/* <DynamicFormComponent formData={FormSchema} setFormValues={setFormValues} /> */}

            <span className="btn btn-primary text-sm mb-4" onClick={onSubmit}>Submit</span>
        </div>
    );
};

export default ForgotPassword;
