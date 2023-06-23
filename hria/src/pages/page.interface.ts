import { FormikHelpers } from "formik";
import { DataObject } from "../components/DynamicForm/elements.interface";

export interface PageProps {
    formRef: React.MutableRefObject<FormikHelpers<DataObject> | null>;
}