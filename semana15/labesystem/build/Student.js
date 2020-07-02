"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const moment_1 = __importDefault(require("moment"));
class Student {
    constructor(id, name, email, birthDate, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    getAge() {
        return moment_1.default().diff(this.birthDate, "years");
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map