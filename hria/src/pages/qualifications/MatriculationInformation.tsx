import FormSchema from '../../json-forms/matriculation-information.json';
import React from 'react';
import { PageProps } from '../page.interface';
import { DynamicFormComponent } from '../../components/DynamicForm';

export const MatriculationInformation: React.FC<PageProps> = ({ formRef }) => {

    return (
        <>
            <div className="fs-4 text-capitalize text-secondary fw-bolder">Matriculation / O-Level Information</div>
            <hr className="divider" />
            <p className="text-secondary fs-6">Please enter your Matriculation / O-Level Marks</p>

            <DynamicFormComponent formData={FormSchema} formRef={formRef} />
        </>
    );
};