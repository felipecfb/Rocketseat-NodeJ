"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(req, res) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        educator: "Felipe",
        duration: 10
    });
    CreateCourseService_1.default.execute({
        name: "ReactJS",
        educator: "Michel",
    });
    return res.send();
}
exports.createCourse = createCourse;
