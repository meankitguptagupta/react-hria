import * as Yup from "yup";
import { DataObject, Field } from "./elements.interface";

const createValidationSchema = (formData: Field[]): Yup.Schema<any> => {
    return Yup.object().shape(
        formData.reduce((schema: any, field: Field) => {
            if (field.validations) {
                const fieldValidation = field.validations.reduce(
                    (fieldSchema: any, validation: any) => {
                        if (validation.required) {
                            fieldSchema = fieldSchema.required(
                                `${field.label} is required`
                            );
                        }
                        if (validation.min) {
                            fieldSchema = fieldSchema.min(
                                validation.min,
                                `${field.label} must be at least ${validation.min} characters`
                            );
                        }
                        if (validation.max) {
                            fieldSchema = fieldSchema.max(
                                validation.max,
                                `${field.label} cannot exceed ${validation.max} characters`
                            );
                        }
                        return fieldSchema;
                    },
                    Yup.string()
                );

                schema[field.id] = fieldValidation;
            }

            return schema;
        }, {})
    );
};

export default createValidationSchema;