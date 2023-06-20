import { FormikHelpers } from "formik";
export interface FieldValidationProps {
    [key: string]: string | boolean | number;
}
export interface Field {
    id: string;
    type: string;
    value?: string;
    label?: string;
    placeholder?: string;
    validations?: FieldValidationProps[],
    formGroupClass?: string;
    labelClass?: string;
    inputClass?: string;
    options?: string[] | Option[];
    rows?: number;
}

export interface Option {
    value: string;
    label: string;
}

export interface DataObject {
    [key: string]: string;
}

export interface DynamicFormProps {
    formData: Field[];
    formRef: React.MutableRefObject<FormikHelpers<DataObject> | null>;
}

export interface InputElementProps {
    id: Field['id'];
    type: Field['type'];
    inputClass?: Field['inputClass'];
    placeholder?: Field['placeholder'];
}

export interface RadioCheckElementProps {
    options: Field['options'];
    id: Field['id'];
    type: Field['type']
}

export interface SelectElementProps {
    options?: Field['options'];
    id: Field['id'];
    inputClass?: Field['inputClass']; // Make inputClass optional
    placeholder?: Field['placeholder'];
}

export interface TextareaElementProps {
    id: Field['id'];
    inputClass?: Field['inputClass']; // Make inputClass optional
    placeholder?: Field['placeholder'];
    rows?: Field['rows'];
}