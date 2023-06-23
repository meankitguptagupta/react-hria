import { Program } from "./course.interface";

interface DesignRowProps {
    program: Program;
    degreeName: string;
}

export const DesignRow: React.FC<DesignRowProps> = ({ program, degreeName }) => {
    return (
        <tr>
            <td>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        id={program.name}
                        name={degreeName}
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