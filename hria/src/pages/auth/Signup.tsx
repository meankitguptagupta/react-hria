import { Link } from 'react-router-dom';
import FormSchema from '../../json-forms/login.json';
import { DataObject } from '../../components/DynamicForm/elements.interface';
import { DynamicFormComponent } from '../../components/DynamicForm';

const Signup = () => {

    const handleFormSubmit = (formData: DataObject) => {
        // Perform any actions with the form data
        console.log(formData);
    };

    return (
        <div className="signup">
            <div className="fs-5 fw-semibold">Register</div>
            <p className='mb-4 text-sm fw-semibold'>already registered? <Link className='text-link text-decoration-none text-sm' to="/">LoginIn</Link></p>

            <DynamicFormComponent formData={FormSchema} formId="signup-form" onSubmit={handleFormSubmit} />

            <button className="btn btn-primary text-sm mb-4" type="submit" form="signup-form">
                Register
            </button>
        </div>
    );
};

export default Signup;
