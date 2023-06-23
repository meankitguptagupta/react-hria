import React from "react";
import { Course } from "./course.interface";

interface SelectCourseProps {
    courses: Course[];
    selectedCourseIndex: number;
    setSelectedCourseIndex: Function
}

const SelectCourse: React.FC<SelectCourseProps> = ({ courses, selectedCourseIndex, setSelectedCourseIndex }) => {
    return (
        <div className="btn-md-group d-md-flex" role="group">
            {courses.map((item, index) => (
                <span
                    key={`SelectCourse-${index}`}
                    className={`btn text-sm ${!index ? '' : 'ms-sm-0 ms-md-2'} rounded w-100 ${selectedCourseIndex === index ? 'btn-primary' : 'btn-outline-primary'
                        }`}
                    onClick={(e) => setSelectedCourseIndex(index)}
                >
                    {item.degree}
                </span>
            ))}
        </div>
    );
};

export default SelectCourse;
