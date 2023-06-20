import React from 'react';
import { TextareaElementProps } from '../elements.interface';
import { Field, FieldInputProps } from 'formik';


const TextareaElement: React.FC<TextareaElementProps> = ({ id, placeholder, inputClass, rows = 3 }) => {

    return (
        <Field name={id}>
            {({ field }: { field: FieldInputProps<any> }) => (
                <textarea
                    placeholder={placeholder}
                    className={`form-control ${inputClass}`}
                    rows={rows}
                />
            )}
        </Field>
    );
};

export default TextareaElement;
