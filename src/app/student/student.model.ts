import { Injectable } from '@angular/core';

export class Student {
  id: string;
  password: string;
  isAttend: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StudentModel {
  private student: Student[] = [];

  constructor() {
    this.createStudent('59050900', '1872');
    this.createStudent('59050911', '8899');
    this.createStudent('59050922', '6914');
    this.createStudent('59050933', '1121');
    this.createStudent('59050944', '0985');
    this.createStudent('59050955', '1111');
    this.createStudent('59050966', '6453');
    this.createStudent('59050977', '4117');
    this.createStudent('59050988', '7000');
    this.createStudent('59050999', '8143');
    console.table(this.student);
  }

  getStudentId(stud: Student): string {
    const user: Student = this.getStudent(stud.id);
    return user.id;
  }

  createStudent(id: string, password: string): void {
    const user: Student = { id, password, isAttend: false };
    this.student.push(user);
  }

  verifyId(id: string): boolean {
    const user: Student = this.getStudent(id);
    return user ? true : false;
  }

  login(id: string, pass: string) {
    const user: Student = this.student.find((acc) => {
      return acc.id === id && acc.password === pass;
    });
    return user ? user : null;
  }

  checkAttend(stud: Student): boolean {
    const user: Student = this.getStudent(stud.id);
    return user.isAttend;
  }

  attendEvent(stud: Student): void {
    const user: Student = this.getStudent(stud.id);
    user.isAttend = true;
  }

  unattendEvent(stud: Student): void {
    const user: Student = this.getStudent(stud.id);
    user.isAttend = false;
  }

  countAttendants(): number {
    let count = 0;
    this.student.forEach(stu => {
      if (stu.isAttend) {
        count++;
      }
    });
    return count;
  }

  private getStudent(id: string): Student {
    return this.student.find((acc) => {
      return acc.id === id;
    });
  }
}
