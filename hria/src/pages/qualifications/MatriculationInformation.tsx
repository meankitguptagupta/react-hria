import FormSchema from '../../json-forms/qualifications/matriculation-information.json';
import FormSchema1 from '../../json-forms/qualifications/matriculation-information1.json';
import React from 'react';
import { PageProps } from '../page.interface';
import { DynamicFormComponent } from '../../components/DynamicForm';

export const MatriculationInformation: React.FC<PageProps> = ({ onSubmit, formId }) => {

    return (
        <>
            <div className="fs-4 text-capitalize text-secondary fw-bolder">Matriculation / O-Level Information</div>
            <hr className="divider" />
            <p className="text-secondary fs-6">Please enter your Matriculation / O-Level Marks</p>

            <DynamicFormComponent formData={FormSchema} onSubmit={onSubmit} formId={formId} />
            <DynamicFormComponent formData={FormSchema1} onSubmit={onSubmit} formId={formId} />
        </>
    );
};
