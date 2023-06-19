import React from 'react';
import { RadioCheckElement } from "../../components/DynamicForm/elements"

const sessions = [
    {
        value: 'morning',
        label: 'Morning Session'
    },
    {
        value: 'evening',
        label: 'Evening Session'
    }
];

export const BatchSelection: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // Handle the change event here
    };

    return (
        <>
            <p>Please select whether you want to apply for the morning or evening session:</p>

            <RadioCheckElement options={sessions} type='checkbox' id='session' onChange={onChange} />
        </>
    );
};
