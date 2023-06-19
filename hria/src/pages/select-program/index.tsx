import { useState } from "react";
import SelectCourse from "./select-course";
import { BatchSelection } from "./batch-selection";
import ProgramSelection from "./program-selection";

import courseData from './courses.json';
import { Course } from "./course.interface";

const courses: Course[] = courseData

const SelectProgram: React.FC = () => {
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
    const [batch, setBatch] = useState(null);

    return (
        <div className="">
            <div className="rounded bg-white container-fluid py-3 px-5">
                <div className="fs-4 text-capitalize text-secondary fw-bolder">program preferences</div>
                <hr className="divider" />
                <div className="fs-6 text-secondary fw-bolder">Select a Program you intend to apply for.</div>

                <div className='my-4'>
                    <SelectCourse courses={courses} selectedCourseIndex={selectedCourseIndex} setSelectedCourseIndex={setSelectedCourseIndex} />
                </div>

                <div className="btn-group" role="group" aria-label="Courses">
                    <span className="btn btn-secondary text-uppercase fs-6">your campus</span>
                    <span className="btn btn-outline-secondary fs-6 text-uppercase">{process.env.REACT_APP_NAME}</span>
                </div>

                <div className='my-4'>
                    <BatchSelection />
                </div>

                <div className='my-4'>
                    <ProgramSelection programs={courses[selectedCourseIndex].programs} degreeName={courses[selectedCourseIndex].degree} />
                </div>
            </div>

            <div className="mb-3"></div>
            <div className="justify-content-end d-flex">
                <span className="btn border px-5 bg-white me-3">Back</span>
                <span className="btn btn-secondary px-4">Save & Next</span>
            </div>
        </div>
    );
};

export default SelectProgram;
