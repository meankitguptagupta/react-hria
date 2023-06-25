import React from 'react';

export const ImageUpload: React.FC = () => {

    return (
        <div className='row'>
            <div className='col-sm-12 col-md-2 text-center'>
                <img src={process.env.REACT_APP_DEFAULT_AVATAR} className='img-fluid w-75 border rounded' />
                <div className=''>Choose File</div>
            </div>
            <div className='col-sm-12 col-md-8'>
                <ul className="mt-4">
                    <li>Upload clear image</li>
                    <li>Maximum size is {process.env.REACT_APP_MAX_UPLOAD_SIZE}</li>
                    <li>To reduce your image size <span className='text-link'>Click here</span></li>
                </ul>
            </div>
        </div>
    );
};
