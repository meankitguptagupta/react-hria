import { Option } from "../../components/DynamicForm/elements.interface";

export interface Program {
    name: string;
    deadline: string;
    batch: string;
}

export interface Course {
    degree: string;
    programs: Program[];
}

export interface BatchSelectionProps {
    programs: Program[],
    onBatchSelect: (batch: string) => void;
}

export interface ProgramSelectionProp {
    options: Option[],
    type: 'checkbox' | 'radio',
    onChange: () => void
}