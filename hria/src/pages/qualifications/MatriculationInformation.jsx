import FormSchema from '../../json-forms/matriculation-information.json';
import DynamicFormComponent from '../../components/DynamicForm';
import { useState } from 'react';

export const MatriculationInformation = () => {

    const [formValues, setFormValues] = useState({})

    const onSubmit = () => {
        console.info('submit clicked', formValues)
    }

    return (
        <>
            <div className="fs-4 text-capitalize text-secondary fw-bolder">Matriculation / O-Level Information</div>
            <hr className="divider" />
            <p className="text-secondary fs-6">Please enter your Matriculation / O-Level Marks</p>

            <DynamicFormComponent formData={FormSchema} setFormValues={setFormValues} />
        </>
    );
};
