import React, { ChangeEvent } from 'react';
import { Field, FieldAttributes, useField } from 'formik';

interface InputElementProps extends FieldAttributes<any> {
    inputClass?: string;
}

const InputElement: React.FC<InputElementProps> = ({ type = "text", id, inputClass, ...rest }) => {
    const [field, meta] = useField(id);

    return <Field
        className={`form-control ${inputClass}`}
        id={id}
        type={type}
        {...rest}
        autoComplete="off" // Set autoComplete to "off"
    />
};

export default InputElement;
