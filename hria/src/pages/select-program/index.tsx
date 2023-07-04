import { useState } from "react";
import SelectCourse from "./select-course";
import { BatchSelection } from "./batch-selection";
import ProgramSelection from "./program-selection";

import courseData from './courses.json';
import { Course } from "./course.interface";

const courses: Course[] = courseData

const SelectProgram: React.FC = () => {
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
    const [batch, setBatch] = useState<string[]>([]);

    const updateBatch = (val: string) => {
        if (!batch.includes(val)) {
            setBatch(prev => [...prev, val]);
        }
    };

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
                    <BatchSelection programs={courseData[selectedCourseIndex].programs} onBatchSelect={e => updateBatch(e)} />
                </div>

                <div className='my-4'>
                    <ProgramSelection course={courses[selectedCourseIndex]} />
                </div>
            </div>

            <div className="mb-3"></div>


            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn border bg-white w-15 me-md-2" type="reset">Back</button>
                <button className="btn btn-secondary w-15" type="submit">Save & Next</button>
            </div>
        </div>
    );
};

export default SelectProgram;
