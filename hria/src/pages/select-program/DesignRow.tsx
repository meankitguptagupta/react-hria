import { useState } from "react";
import { Program } from "./course.interface";

interface DesignRowProps {
    program: Program;
    degreeName: string;
}

export const DesignRow: React.FC<DesignRowProps> = ({ program, degreeName }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleRowClick = () => {
        setIsSelected(true);
        // Pass the selected program information to the SelectProgram component
        // You can use a callback function or a state update here
    };

    return (
        <tr className="cursor-pointer" onClick={handleRowClick}>
            <td>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="selectedProgram"
                        id={program.name}
                        checked={isSelected}
                        readOnly
                    />
                    <label className="form-check-label" htmlFor={program.name}>
                        {program.name}
                    </label>
                </div>
            </td>
            <td className="text-secondary">
                {program.name}
            </td>
            <td className="text-secondary">
                {program.deadline}
            </td>
        </tr>
    );
};