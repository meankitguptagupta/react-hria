import React, { useState } from "react";
import { Field, FieldInputProps } from "formik";

const UploadElement: React.FC<{ id: string }> = ({ id }) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <Field name={id}>
            {({ field }: { field: FieldInputProps<any> }) => {
                return <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="input-group">
                            <label className="form-control" style={{ height: "6vh" }} title={fileName}>
                                {fileName.substring(0, 20) || 'Choose file'}
                                <input
                                    type="file"
                                    className="invisible"
                                    onChange={handleFileChange}
                                />
                            </label>
                            <span className="input-group-text" style={{ height: "6vh" }}>
                                Browse
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 pt-2">
                        <div
                            className="progress text-right"
                            role="progressbar"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                            <div className="progress-bar bg-primary w-25">25%</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 pt-1 d-flex align-items-center text-sm">
                        {fileName && (
                            <>
                                <span className="border px-1 me-1 rounded text-white bg-success">
                                    <i className="fa fa-check" aria-hidden="true"></i>
                                </span>
                                <span className="ml-2" title={fileName}>{fileName.substring(0, 28)}</span>
                            </>
                        )}
                    </div>
                    <div className="col-sm-12 col-md-1 pt-2">
                        {
                            fileName && (
                                <>
                                    <span className="border px-1 text-sm me-1 rounded-circle text-white bg-danger">
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span className="border px-1 text-sm rounded-circle text-white bg-primary">
                                        <i className="fa fa-download" aria-hidden="true"></i>
                                    </span>
                                </>
                            )
                        }
                    </div>
                </div>
            }}
        </Field>
    );
};

export default UploadElement;
