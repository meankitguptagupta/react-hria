import React, { ChangeEvent, useEffect, useState } from 'react';
import { ImageUploadElement, InputElement, RadioCheckElement, SelectElement, TextareaElement } from './elements';
import { DynamicFormComponentProps, Field as DynamicFormField, FieldWithValidation, FormDataObject } from './elements.interface';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DynamicFormComponent: React.FC<DynamicFormComponentProps> = ({ formData, setFormValues }) => {
    const initialValues = formData.reduce((obj: FormDataObject, field: DynamicFormField) => {
        obj[field.id] = field.defaultValue || '';
        return obj;
    }, {});

    const validationSchema = Yup.object().shape<any>(
        formData.reduce((schema: FieldWithValidation, field: DynamicFormField) => {
            if (field.validation) {
                schema[field.id] = field.validation;
            } else {
                schema[field.id] = Yup.mixed();
            }
            return schema;
        }, {} as FieldWithValidation)
    );

    const renderField = (field: DynamicFormField) => {
        switch (field.type) {
            case 'radio':
            case 'checkbox':
                return (
                    <RadioCheckElement
                        {...field}
                    />
                );
            case 'select':
                return (
                    <SelectElement
                        {...field}
                    />
                );
            case 'image_upload':
                return (
                    <ImageUploadElement
                        {...field}
                    />
                );
            case 'textarea':
                return (
                    <TextareaElement
                        {...field}
                    />
                );
            default:
                return (
                    <InputElement
                        {...field}
                    />
                );
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Submitted values:', values);
                setSubmitting(false);
            }}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="row">
                        {formData.map((field, index) => (
                            <div key={index} className={`col-sm-12 ${field.formGroupClass}`}>
                                <label className={`${field.labelClass} lh-1`} htmlFor={field.id}>
                                    {field.label}
                                </label>
                                {renderField(field)}
                                <ErrorMessage name={field.id} component="small" className="text-danger" />
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="btn btn-primary text-sm mb-4" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default DynamicFormComponent;
