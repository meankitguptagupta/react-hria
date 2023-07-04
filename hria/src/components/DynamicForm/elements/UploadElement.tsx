import React, { useState } from "react";
import { Field, FieldInputProps } from "formik";

const UploadElement: React.FC<{ id: string }> = ({ id }) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName(""); // Clear the file name if no file is selected
        }
    };

    const clearFile = () => {
        setFileName("");
    };

    return (
        <Field name={id}>
            {({ field }: { field: FieldInputProps<any> }) => {
                return (
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="input-group">
                                <label
                                    className="form-control cursor-pointer text-body-tertiary"
                                    style={{ height: "38px" }}
                                    title={fileName}
                                >
                                    {fileName.substring(0, 20) || "Choose file"}
                                    <input
                                        type="file"
                                        className="invisible"
                                        onChange={handleFileChange}
                                        id={id}
                                    />
                                </label>
                                <label htmlFor={id} className="input-group-text cursor-pointer" style={{ height: "38px" }}>
                                    Browse
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 pt-2"></div>
                        <div className="col-sm-12 col-md-3 pt-1 d-flex align-items-center text-sm"></div>
                        <div className="col-sm-12 col-md-1 pt-2">
                            {
                                fileName && (
                                    <>
                                        <span
                                            className="btn btn-sm rounded-circle btn-danger me-2"
                                            onClick={clearFile}
                                        >
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </span>
                                        <span className="btn btn-sm rounded-circle btn-primary">
                                            <i className="fa fa-download" aria-hidden="true"></i>
                                        </span>
                                    </>
                                )
                            }
                        </div>
                    </div>
                );
            }}
        </Field>
    );
};

export default UploadElement;
