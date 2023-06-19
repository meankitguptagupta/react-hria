import React, { ChangeEvent } from 'react';
import { ImageUploadElementProps } from '../elements.interface';
import { useField } from 'formik';

const ImageUploadElement: React.FC<ImageUploadElementProps> = ({ defaultValue, id }) => {
    const [field, meta] = useField(id);

    return (
        <div className='row'>
            <div className='col-sm-12 col-md-2 text-center'>
                <img src={defaultValue} className='img-fluid w-75 border rounded' />
                <div className=''>Choose File</div>
            </div>
            <div>
                <ul className="mt-4">
                    <li>Upload clear image</li>
                    <li>Maximum size is {process.env.REACT_APP_MAX_UPLOAD_SIZE}</li>
                    <li>To reduce your image size <span className='text-link'>Click here</span></li>
                </ul>
            </div>
        </div>
    );
};

export default ImageUploadElement;
