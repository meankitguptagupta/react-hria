import React from 'react';
import { DesignRow } from './DesignRow';
import { Course, Program } from './course.interface';

interface CustomType {
    course: Course;
};


const ProgramSelection: React.FC<CustomType> = ({ course }) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover text-left text-secondary">
                <thead className="text-uppercase">
                    <tr>
                        <td className="col-sm-2"></td>
                        <td className="col-sm-4 text-info">program</td>
                        <td className="col-sm-5 text-info">admission deadline</td>
                    </tr>
                </thead>
                <tbody>
                    {course.programs.map((program: Program, index: number) => (
                        <DesignRow key={`program-row-${index}`} program={program} degreeName={course.degree} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProgramSelection;
