import { ChangeEvent } from 'react';
import * as Yup from 'yup';

export interface Option {
    value: string;
    label: string;
    defaultCheck?: boolean;
}

export enum TypeField {
    Text = 'text',
    Number = 'number',
    Email = 'email',
    Password = 'password',
    Checkbox = 'checkbox',
    Radio = 'radio',
    Select = 'select',
    Textarea = 'textarea',
    ImageUpload = 'image_upload'
}

export interface FieldWithValidation {
    [key: string]: Yup.Schema<any> | Yup.Schema<any>[] | undefined | Yup.MixedSchema<any>;
}

export interface Field {
    id: string;
    type: string;
    formGroupClass?: string;
    labelClass?: string;
    label: string;
    defaultValue?: string;
    options?: Option[];
    inputClass?: string;
    validation?: Yup.Schema<any> | Yup.Schema<any>[];
}


export interface RadioCheckElementProps {
    options?: Option[]; // Make the options property optional
    id: string;
    type: Field['type'];
    // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectElementProps {
    options?: Option[];
    placeholder?: string;
    // onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    inputClass?: string;
}

export interface DynamicFormComponentProps {
    formData: Field[];
    setFormValues: (values: FormDataObject) => void; // Corrected type definition
}

export interface ImageUploadElementProps {
    defaultValue?: string;
    id: string;
    // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaElementProps {
    defaultValue?: string;
    placeholder?: string;
    inputClass?: string;
    // onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number
}

export interface FormDataObject {
    [key: string]: string;
}
