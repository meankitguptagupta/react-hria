import React, { useRef } from 'react';
import { FormikHelpers } from 'formik';
import { DataObject } from '../../components/DynamicForm/elements.interface';
import UploadInstruction from './UploadInstruction';
import { DynamicFormComponent } from '../../components/DynamicForm';
import formData from '../../json-forms/upload.json';

export const Documents: React.FC = () => {

    const formRef = useRef<FormikHelpers<DataObject> | null>(null);

    return (
        <div>
            <div className="rounded bg-white container-fluid py-3 px-5">
                <UploadInstruction />

                <DynamicFormComponent formData={formData} formRef={formRef} />
            </div>

            <div className="mb-3"></div>

            <div className="justify-content-end d-flex">
                <span className="btn border px-5 bg-white me-3">Back</span>
                <span className="btn btn-secondary px-4">Save & Next</span>
            </div>
        </div>
    );
};

export default Documents;
