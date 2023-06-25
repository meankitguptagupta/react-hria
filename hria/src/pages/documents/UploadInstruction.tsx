import React from 'react';

export const UploadInstruction: React.FC = () => {

    return (
        <div>
            <div className="fs-4 text-capitalize text-secondary fw-bolder">Upload Documents</div>
            <hr className="divider" />
            <ul className="mt-4">
                <li>Upload clear image</li>
                <li>Maximum size is {process.env.REACT_APP_MAX_UPLOAD_SIZE}</li>
                <li>To reduce your image size <span className='text-link'>Click here</span></li>
            </ul>
        </div>
    );
};

export default UploadInstruction;
