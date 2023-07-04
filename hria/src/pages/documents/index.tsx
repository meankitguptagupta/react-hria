import React from 'react';
import { DataObject } from '../../components/DynamicForm/elements.interface';
import UploadInstruction from './UploadInstruction';
import { DynamicFormComponent } from '../../components/DynamicForm';
import formData from '../../json-forms/upload.json';

const Documents: React.FC = () => {

    const handleFormSubmit = (formData: DataObject) => {
        // Perform any actions with the form data
        console.log(formData);
    };

    return (
        <div className='document-upload'>
            <div className="rounded bg-white container-fluid py-3 px-5">
                <UploadInstruction />

                <DynamicFormComponent formData={formData} onSubmit={handleFormSubmit} formId="document-upload-form" />
            </div>

            <div className="mb-3"></div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn border bg-white w-md-15 me-md-2" type="reset" form="document-upload-form">Back</button>
                <button className="btn btn-secondary w-md-15" type="submit" form="document-upload-form">Save & Next</button>
            </div>
        </div>
    );
};

export default Documents;
