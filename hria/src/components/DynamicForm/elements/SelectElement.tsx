import React from 'react';
import { SelectElementProps } from '../elements.interface';
import { Field, FieldAttributes, useField } from 'formik';

interface SelectElementPropsWithFormik extends SelectElementProps, FieldAttributes<any> { }

const SelectElement: React.FC<SelectElementPropsWithFormik> = ({ options = [], id, inputClass, placeholder = '', ...rest }) => {
    const [field, meta] = useField(id);

    return (
        <Field as="select" className={`form-select ${inputClass}`} {...rest}>
            <option aria-readonly>{placeholder}</option>
            {options.map((option, index) => (
                <option key={`select-${index}`} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Field>
    );
};

export default SelectElement;
