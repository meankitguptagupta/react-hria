import React from "react";
import { DataObject, DynamicFormProps, Field } from "./elements.interface";
import { Form, Formik, FormikHelpers, ErrorMessage, Field as FormikField } from "formik";
import InputElement from "./elements/InputElement";
import createValidationSchema from "./validation.schema";

export const DynamicFormComponent: React.FC<DynamicFormProps> = ({
    formData,
    formRef
}) => {

    const initialValues: DataObject = formData.reduce(
        (o: DataObject, i: Field) => ({ ...o, [i.id]: i.value || '' }),
        {}
    );

    const validationSchema = createValidationSchema(formData);

    const renderField = (field: Field) => {
        switch (field.type) {
            default:
                return <InputElement {...field} />;
        }
    };

    const onSubmitForm = (values: DataObject, actions: FormikHelpers<DataObject>) => { };


    return (
        <Formik
            innerRef={(ref) => (formRef.current = ref)}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmitForm} // Updated onSubmit prop
        >
            <Form>
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