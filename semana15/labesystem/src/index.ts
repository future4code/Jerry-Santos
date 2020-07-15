import { Student } from "./Student";
import moment from 'moment';
import { FullTimeMission } from "./FullTimeMission";
import { CURRENT_MODULE } from "./Mission";
import { Teacher, TEACHER_SPECIALTY } from "./Teacher";
import { FileManager } from './FileManager';

const joe: Student = new Student(
    "LAB8375252", 
    "Joe", 
    "joe@labenu.com.br",
    moment("15/10/1982", "DD/MM/YYYY"),
    ["Jogar futebol", "Filmes", "Carros"]
)

// console.log(joe.getAge());

const joao: Teacher = new Teacher(
    "LAB007",
    "João",
    "joao@labenu.com.br",
    [
        TEACHER_SPECIALTY.OOP,
        TEACHER_SPECIALTY.TYPESCRIPT,
        TEACHER_SPECIALTY.CSS,
        TEACHER_SPECIALTY.BACKEND,
    ]
)

//console.log(joao);

const julian: FullTimeMission = new FullTimeMission(
    "LAB05",
    "Julian",
    moment("16/03/2020", "DD/MM/YYYY"),
    moment("24/09/2020", "DD/MM/YYYY"),
    [],
    [],
    CURRENT_MODULE.FOUR
)

julian.addTeacher(joao);
julian.addStudent(joe);

const missions: FileManager = new FileManager("missions.json");

missions.writeFIle(julian);

console.log(missions.readFile());


const students: FileManager = new FileManager("students.json");

students.writeFIle(joe);

const allStudents: Student[] = students.readFile();

console.log(allStudents)