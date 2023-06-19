import { useEffect, useState } from 'react';
import FormSchema from '../../json-forms/personal-information.json';
import { ProfileInstructions } from './profile-instruction';
import DynamicFormComponent from '../../components/DynamicForm';

export const Profile = () => {
    const [formData, setFormData] = useState(FormSchema);

    useEffect(() => {
        // Set default image
        updateDefaultValue();
    }, []);

    const updateDefaultValue = () => {
        const updatedFormValues = [...formData]; // Create a copy of the array

        // Update the defaultValue at index 0
        updatedFormValues[0] = {
            ...updatedFormValues[0],
            // @ts-ignore
            defaultValue: process.env.REACT_APP_DEFAULT_AVATAR,
        };

        setFormData(updatedFormValues); // Update the state with the new array
    };

    const [formValues, setFormValues] = useState({})

    const onSubmit = () => {
        console.info('submit clicked', formValues)
    }

    return (
        <div className="rounded bg-white container-fluid py-3 px-5">
            <div className="fs-4 text-capitalize text-secondary">personal information</div>
            <hr className="divider" />

            <DynamicFormComponent formData={formData} setFormValues={setFormValues} />

            <ProfileInstructions />
        </div>
    );
};
