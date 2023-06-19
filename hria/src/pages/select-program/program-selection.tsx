import React from 'react';
import { Program } from './course.interface';
import { DesignRow } from './DesignRow';

interface ProgramSelectionProps {
    programs: Program[];
    degreeName: string;
}

const ProgramSelection: React.FC<ProgramSelectionProps> = ({ programs = [], degreeName }) => {
    return (
        <table className="table table-hover text-left text-secondary">
            <thead className="text-uppercase">
                <tr>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-4 text-info">program</td>
                    <td className="col-sm-5 text-info">admission deadline</td>
                </tr>
            </thead>
            <tbody>
                {programs.map((program, index) => (
                    <DesignRow key={`program-row-${index}`} program={program} degreeName={degreeName} />
                ))}
            </tbody>
        </table>
    );
};

export default ProgramSelection;
