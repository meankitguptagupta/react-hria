import React, { useRef } from 'react';
import { Instructions } from "./Instructions";
import { MatriculationInformation } from "./MatriculationInformation";
import { FormikHelpers } from 'formik';
import { DataObject } from '../../components/DynamicForm/elements.interface';
import { IntermediateInformation } from './IntermediateInformation';

export const Qualification: React.FC = () => {

    const instRef = useRef<FormikHelpers<DataObject> | null>(null);
    const matrRef = useRef<FormikHelpers<DataObject> | null>(null);

    return (
        <div>
            <div className="rounded bg-white container-fluid py-3 px-5">
                <Instructions />
            </div>

            <div className="mb-3"></div>

            <div className="rounded bg-white container-fluid py-3 px-5">
                <MatriculationInformation formRef={matrRef} />
            </div>

            <div className="mb-3"></div>

            <div className="rounded bg-white container-fluid py-3 px-5">
                <IntermediateInformation formRef={instRef} />
            </div>

            <div className="mb-3"></div>

            <div className="justify-content-end d-flex">
                <span className="btn border px-5 bg-white me-3">Back</span>
                <span className="btn btn-secondary px-4">Save & Next</span>
            </div>
        </div>
    );
};

export default Qualification;
