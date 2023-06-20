import React from 'react';
import FormSchema from '../../json-forms/parent-information.json';
import { PageProps } from './student.interface';
import { DynamicFormComponent } from '../../components/DynamicForm';
import { FormikHelpers } from 'formik';
import { DataObject } from '../../components/DynamicForm/elements.interface';

export const ParentInformation: React.FC<PageProps> = ({ formRef }) => {

    return (
        <div className="rounded bg-white container-fluid py-3 px-5">
            <div className="fs-4 text-capitalize text-secondary">parent/guardian information</div>
            <hr className="divider" />

            <DynamicFormComponent formData={FormSchema} formRef={formRef} />
        </div>
    );
};
