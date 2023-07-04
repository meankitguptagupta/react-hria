import FormSchema from '../../json-forms/qualifications/intermediate-information.json';
import FormSchema1 from '../../json-forms/qualifications/intermediate-information1.json';
import React from 'react';
import { PageProps } from '../page.interface';
import { DynamicFormComponent } from '../../components/DynamicForm';

export const IntermediateInformation: React.FC<PageProps> = ({ onSubmit, formId }) => {

    return (
        <>
            <div className="fs-4 text-capitalize text-secondary fw-bolder">Intermediate / A-Level Information</div>
            <hr className="divider" />
            <p className="text-secondary fs-6">Please enter your Intermediate / A-Level Marks</p>

            <DynamicFormComponent formData={FormSchema} onSubmit={onSubmit} formId={formId} />
            {/* <div className='justify-content-end d-flex'> */}
            <div className='row'>
                <div className="col-sm-4"></div>
                <div className="col-sm-8">
                    <ul className=''>
                        <li>
                            Please provide only Intermediate Part-I information
                        </li>
                        <li>
                            DAE holders should provide details of their accumulative result of first year and second year
                        </li>
                        <li>
                            Eligibility criteria requires a minimum score of 45% or higher
                        </li>
                    </ul>
                </div>

            </div>

            <DynamicFormComponent formData={FormSchema1} onSubmit={onSubmit} formId={formId} />

        </>
    );
};
