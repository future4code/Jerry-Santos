import { Teacher } from "./Teacher";
import { Student } from "./Student";

export enum CURRENT_MODULE {
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
}

export abstract class Mission {

    constructor(
        private id: string,
        private name: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Student[] = [],
        private currentModule: CURRENT_MODULE | undefined = undefined
    ){}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getStartDate(): moment.Moment {
        return this.startDate;
    }

    public getEndDate(): moment.Moment {
        return this.endDate;
    }

    public getCurrentModule(): CURRENT_MODULE | undefined {
        return  this.currentModule;
    }

    public addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    public addStudent(student: Student): void {
        this.students.push(student);
    }

    public setName(name: string): void {
        this.name = name;
    }
}
