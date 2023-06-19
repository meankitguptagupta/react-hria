import { RadioCheckElement } from "../../components/DynamicForm/elements";
import { Program } from "./course.interface";

interface DesignRowProps {
    program: Program;
    degreeName: string;
}

export const DesignRow: React.FC<DesignRowProps> = ({ program, degreeName }) => {
    const onchange = (e: any) => {
        e.preventDefault()
    }
    return (
        <tr>
            <td>
                <RadioCheckElement options={[{ value: program.name, label: program.name }]} id={degreeName} type="radio" onChange={onchange} />
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