import React from "react";
import { Field, FieldInputProps, FieldProps } from "formik";
import { InputElementProps } from "../elements.interface";

const InputElement: React.FC<InputElementProps> = ({ type, id, inputClass }) => {
    return (
        <Field name={id}>
            {({ field }: { field: FieldInputProps<any> }) => (
                <input
                    {...field}
                    className={`form-control ${inputClass}`}
                    id={id}
                    type={type}
                    autoComplete="off"
                />
            )}
        </Field>
    );
};

export default InputElement;