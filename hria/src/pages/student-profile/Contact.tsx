import React from 'react';
import FormSchema from '../../json-forms/contact-information.json';
import { PageProps } from '../page.interface';
import { DynamicFormComponent } from '../../components/DynamicForm';

export const ContactInformation: React.FC<PageProps> = ({ formRef }) => {

    return (
        <div className="rounded bg-white container-fluid py-3 px-5">
            <div className="fs-4 text-capitalize text-secondary">Contact information</div>
            <hr className="divider" />

            <DynamicFormComponent formData={FormSchema} formRef={formRef} />
        </div>
    );
};
