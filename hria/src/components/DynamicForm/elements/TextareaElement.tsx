import React, { ChangeEvent } from 'react';
import { TextareaElementProps } from '../elements.interface';
import { FieldAttributes, useField } from 'formik';

interface TextareaElementPropsWithFormik extends TextareaElementProps, FieldAttributes<any> { }

const TextareaElement: React.FC<TextareaElementPropsWithFormik> = ({ defaultValue, id, placeholder, inputClass, rows = 3, onChange }) => {
    const [field, meta] = useField(id);

    return (
        <textarea
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            className={inputClass}
            rows={rows}
        />
    );
};

export default TextareaElement;
