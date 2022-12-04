import { Student } from "./student.entity";
import {Teacher} from "./teacher.entity";
import {Course} from "./curs.entity";
import {Book} from "./librocalificaciones.entity";
import {Actividades} from"./actividades.entity";
import {Calificaciones} from"./calificaciones.entity";

let curso: Course[] = [];
let teacher: Teacher[] = [];

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName:  readFormHtml("fullNameTeacher"),
        identification:parseInt( readFormHtml("identificationTeacher")),
        direction:readFormHtml("directionTeacher"),
        title:readFormHtml("title"),
        matter:readFormHtml("matter")
    }
    teacher.push(currentTeacher);
    console.table(teacher)
}
let book: Book[] = [];

function addBook ():void{
    let currentBook : Book = {
        valor: readFormHtml("valor"),
        curso:readFormHtml("curso"),
        actividad: readFormHtml("actividad"),
        notaMaxima:parseInt(readFormHtml("notaMaxima"))
    }
    book.push(currentBook);
    console.table(book)
}

function addCourse ():void{
    let currentCourse : Course = {
        nameCourse: readFormHtml("nameCourse"),
        parallel:readFormHtml("parallel"),
        hours: parseInt(readFormHtml("hours"))
    }
    curso.push(currentCourse);
    console.log(curso)
}

let students: Student[] = [];

function addStudent(): void {
    let currentStudent: Student = {
        fullName:  readFormHtml("fullName"),
        identification: parseInt( readFormHtml("identification")),
        direction:  readFormHtml("direction"),
        enrollment: parseInt( readFormHtml("enrollment")),
        level:  readFormHtml("level")

    }
    students.push(currentStudent);
    console.log(students)
}
function readFormHtml(id:string):string{
    return(<HTMLInputElement>document.getElementById(id)).value;
}