"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = exports.CURRENT_MODULE = void 0;
var CURRENT_MODULE;
(function (CURRENT_MODULE) {
    CURRENT_MODULE["ONE"] = "1";
    CURRENT_MODULE["TWO"] = "2";
    CURRENT_MODULE["THREE"] = "3";
    CURRENT_MODULE["FOUR"] = "4";
    CURRENT_MODULE["FIVE"] = "5";
    CURRENT_MODULE["SIX"] = "6";
    CURRENT_MODULE["SEVEN"] = "7";
})(CURRENT_MODULE = exports.CURRENT_MODULE || (exports.CURRENT_MODULE = {}));
class Mission {
    constructor(id, name, startDate, endDate, teachers = [], students = [], currentModule = undefined) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    getCurrentModule() {
        return this.currentModule;
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    setName(name) {
        this.name = name;
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map