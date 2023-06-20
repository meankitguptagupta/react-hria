import { useRef } from 'react';
import { ContactInformation } from './Contact';
import { ParentInformation } from './Parent';
import { Profile } from './Profile';
import { FormikHelpers } from 'formik';
import { DataObject } from '../../components/DynamicForm/elements.interface';

const StudentProfile: React.FC = () => {

    const profileRef = useRef<FormikHelpers<DataObject> | null>(null);
    const parentRef = useRef<FormikHelpers<DataObject> | null>(null);
    const contactRef = useRef<FormikHelpers<DataObject> | null>(null);

    const handleSubmit = () => {
        if (
            profileRef.current &&
            parentRef.current &&
            contactRef.current
        ) {
            // @ts-ignore
            const { values, isValid } = profileRef.current;
            console.log('Form Values:', values);
            // Access the form values here
        }
    };

    return (
        <div className="personal-information">
            <Profile formRef={profileRef} />
            <div className="mb-5"></div>
            <ParentInformation formRef={parentRef} />
            <div className="mb-5"></div>
            <ContactInformation formRef={contactRef} />
            <div className="mb-3"></div>
            <div className="justify-content-end d-flex">
                <span className="btn border px-5 bg-white me-3">Back</span>
                <span className="btn btn-secondary px-4" onClick={handleSubmit}>
                    Signup
                </span>
            </div>
        </div>
    );
};

export default StudentProfile;
