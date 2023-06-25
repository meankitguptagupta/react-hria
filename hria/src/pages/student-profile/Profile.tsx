import FormSchema from '../../json-forms/personal-information.json';
import { ProfileInstructions } from './profile-instruction';
import { DynamicFormComponent } from '../../components/DynamicForm';
import { PageProps } from '../page.interface';
import React from 'react';
import { ImageUpload } from './ImageUpload';

export const Profile: React.FC<PageProps> = ({ formRef }) => {


    return (
        <div className="rounded bg-white container-fluid py-3 px-5">
            <div className="fs-4 text-capitalize text-secondary">personal information</div>
            <hr className="divider" />

            <ImageUpload />

            <DynamicFormComponent formData={FormSchema} formRef={formRef} />

            <ProfileInstructions />
        </div>
    );
};
