export interface Program {
    name: string;
    deadline: string;
    batch: string;
}

export interface Course {
    degree: string;
    programs: Program[];
}