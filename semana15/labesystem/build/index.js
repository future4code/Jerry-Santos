"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
const moment_1 = __importDefault(require("moment"));
const FullTimeMission_1 = require("./FullTimeMission");
const Mission_1 = require("./Mission");
const Teacher_1 = require("./Teacher");
const FileManager_1 = require("./FileManager");
const joe = new Student_1.Student("LAB8375252", "Joe", "joe@labenu.com.br", moment_1.default("15/10/1982", "DD/MM/YYYY"), ["Jogar futebol", "Filmes", "Carros"]);
const joao = new Teacher_1.Teacher("LAB007", "João", "joao@labenu.com.br", [
    Teacher_1.TEACHER_SPECIALTY.OOP,
    Teacher_1.TEACHER_SPECIALTY.TYPESCRIPT,
    Teacher_1.TEACHER_SPECIALTY.CSS,
    Teacher_1.TEACHER_SPECIALTY.BACKEND,
]);
const julian = new FullTimeMission_1.FullTimeMission("LAB05", "Julian", moment_1.default("16/03/2020", "DD/MM/YYYY"), moment_1.default("24/09/2020", "DD/MM/YYYY"), [], [], Mission_1.CURRENT_MODULE.FOUR);
julian.addTeacher(joao);
julian.addStudent(joe);
const missions = new FileManager_1.FileManager("missions.json");
missions.writeFIle(julian);
console.log(missions.readFile());
const students = new FileManager_1.FileManager("students.json");
students.writeFIle(joe);
const allStudents = students.readFile();
console.log(allStudents);
//# sourceMappingURL=index.js.map