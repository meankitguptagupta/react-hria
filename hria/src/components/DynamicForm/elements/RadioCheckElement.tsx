import React from 'react';
import { RadioCheckElementProps } from '../elements.interface';
import { Field, FieldAttributes, useField } from 'formik';

interface RadioCheckElementPropsWithFormik extends RadioCheckElementProps, FieldAttributes<any> { }

const RadioCheckElement: React.FC<RadioCheckElementPropsWithFormik> = ({ options = [], id, type, ...rest }) => {
    const [field, meta] = useField(id);
    return (
        <>
            {options.map((option, optionIndex) => (
                <div className="form-check form-check-inline" key={optionIndex}>
                    <Field
                        className="form-check-input"
                        type={type}
                        name={id}
                        id={option.value}
                        value={option.value}
                        {...rest}
                    />
                    <label className="form-check-label" htmlFor={option.value}>
                        {option.label}
                    </label>
                </div>
            ))}
        </>
    );
};

export default RadioCheckElement;
