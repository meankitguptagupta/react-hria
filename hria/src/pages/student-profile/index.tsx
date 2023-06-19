import React from 'react';
import { ContactInformation } from './Contact';
import { ParentInformation } from './Parent';
import { Profile } from './Profile';

const StudentProfile: React.FC = () => {
    return (
        <div className="">
            <Profile />
            <div className="mb-5"></div>
            <ParentInformation />
            <div className="mb-5"></div>
            <ContactInformation />
            <div className="mb-3"></div>
            <div className="justify-content-end d-flex">
                <span className="btn border px-5 bg-white me-3">Back</span>
                <span className="btn btn-secondary px-4">Save & Next</span>
            </div>
        </div>
    );
};

export default StudentProfile;
