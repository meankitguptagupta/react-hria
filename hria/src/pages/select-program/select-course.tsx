import React from "react";
import { Course } from "./course.interface";

interface SelectCourseProps {
    courses: Course[];
    selectedCourseIndex: number;
    setSelectedCourseIndex: Function
}

const SelectCourse: React.FC<SelectCourseProps> = ({ courses, selectedCourseIndex, setSelectedCourseIndex }) => {
    return (
        <>
            {courses.map((item, index) => (
                <span
                    key={`SelectCourse-${index}`}
                    className={`btn ${!index ? '' : 'ms-1'} ${selectedCourseIndex === index ? 'btn-primary' : 'btn-outline-primary'
                        }`}
                    onClick={(e) => setSelectedCourseIndex(index)}
                >
                    {item.degree}
                </span>
            ))}
        </>
    );
};

export default SelectCourse;
