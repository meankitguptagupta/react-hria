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
    options?: string[] | Option[]
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
    id: string;
    type: string;
    inputClass?: string;
    placeholder?: string;
}