import React from 'react';
import { Instructions } from "./Instructions";
import { MatriculationInformation } from "./MatriculationInformation";
import { DataObject } from '../../components/DynamicForm/elements.interface';
import { IntermediateInformation } from './IntermediateInformation';

export const Qualification: React.FC = () => {

    const handleFormSubmit = (formData: DataObject) => {
        // Perform any actions with the form data
        console.log(formData);
    };

    return (
        <div className='qualification'>
            <div className="rounded bg-white container-fluid py-3 px-5">
                <Instructions />
            </div>

            <div className="mb-3"></div>

            <div className="rounded bg-white container-fluid py-3 px-5">
                <MatriculationInformation onSubmit={handleFormSubmit} formId="qualification-form" />
            </div>

            <div className="mb-3"></div>

            <div className="rounded bg-white container-fluid py-3 px-5">
                <IntermediateInformation onSubmit={handleFormSubmit} formId="qualification-form" />
            </div>

            <div className="mb-3"></div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn border bg-white w-15 me-md-2" type="reset" form="qualification-form">Back</button>
                <button className="btn btn-secondary w-15" type="submit" form="qualification-form">Save & Next</button>
            </div>
        </div>
    );
};

export default Qualification;
