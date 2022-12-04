"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let curso = [];
let teacher = [];
function addTeacher() {
    let currentTeacher = {
        fullName: (readformHtml("fullNameTeacher")),
        identification: parseInt(readformHtml("identificationTeacher")),
        direction: readformHtml("directionTeacher"),
        matter: readformHtml("level"),
        title: readformHtml("title"),
    };
    teacher.push(currentTeacher);
    console.log(teacher);
}
let book = [];
function addBook() {
    let currentBook = {
        valor: readformHtml("valor"),
        curso: readformHtml("curso"),
        actividad: readformHtml("actividad"),
        notaMaxima: parseInt(readformHtml("notaMaxima"))
    };
    book.push(currentBook);
    console.log(book);
}
function addCourse() {
    let currentCourse = {
        nameCourse: readformHtml("nameCourse"),
        parallel: readformHtml("parallel"),
        hours: parseInt(readformHtml("hours")),
    };
    curso.push(currentCourse);
    console.log(curso);
}
/*function addStudent(): void {
    let currentStudent: Student = {
        fullName: ( readformHtml("fullName")),
        identification: parseInt( readformHtml("identification")),
        direction:  readformHtml("direction"),
        enrollment: parseInt( readformHtml("enrollment")),
        level:  readformHtml("level"),

    }
    students.push(currentStudent);
    console.log(students)
}*/
let students = [];
function addStudent() {
    let currentStudent = {
        fullName: (readformHtml("fullName")),
        identification: parseInt(readformHtml("identification")),
        direction: readformHtml("direction"),
        enrollment: parseInt(readformHtml("enrollment")),
        level: readformHtml("level"),
    };
    students.push(currentStudent);
    console.log(students);
}
function readformHtml(id) {
    return document.getElementById(id).value;
}
