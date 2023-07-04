import React from "react";
import { DataObject, DynamicFormProps, Field } from "./elements.interface";
import { Form, Formik, FormikHelpers, ErrorMessage } from "formik";
import InputElement from "./elements/InputElement";
import createValidationSchema from "./validation.schema";
import RadioCheckElement from "./elements/RadioCheckElement";
import SelectElement from "./elements/SelectElement";
import TextareaElement from "./elements/TextareaElement";
import UploadElement from "./elements/UploadElement";

export const DynamicFormComponent: React.FC<DynamicFormProps> = ({
    formData,
    formId,
    onSubmit
}) => {

    const initialValues: DataObject = formData.reduce(
        (o: DataObject, i: Field) => ({ ...o, [i.id]: i.value || '' }),
        {}
    );

    const validationSchema = createValidationSchema(formData);

    const renderField = (field: Field) => {
        switch (field.type) {
            case 'textarea':
                return <TextareaElement {...field} />
            case 'radio':
            case 'checkbox':
                return <RadioCheckElement {...field} options={field?.options || []} />;
            case 'select':
                return <SelectElement {...field} />;
            case 'upload':
                return <UploadElement {...field} />;
            default:
                return <InputElement {...field} />;
        }
    };

    const onSubmitForm = (values: DataObject, actions: FormikHelpers<DataObject>) => {
        actions.setSubmitting(false);
        actions.resetForm();
        onSubmit(values); // Call the onSubmit prop with the form values
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmitForm}
        >

            <Form id={formId}>
                <div className="row">
                    {formData.map((field: Field, i: number) => (
                        <div
                            className={`col-sm-12 ${field?.formGroupClass}`}
                            key={`formdata-${i}`}
                        >
                            <label
                                className={`lh-1 ${field?.labelClass}`}
                                htmlFor={field.id}
                            >
                                {field?.label}
                            </label>
                            {renderField(field)}
                            <ErrorMessage
                                name={field.id}
                                component="small"
                                className="text-danger"
                            />
                        </div>
                    ))}
                </div>
            </Form>
        </Formik>
    );
};