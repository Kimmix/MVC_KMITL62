import { Component, OnInit } from '@angular/core';
import { Student, StudentModel } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.view.html'
})
export class StudentController implements OnInit {
  user: Student = null;
  studentModel = new StudentModel();
  // Login
  isLogin: boolean;
  userId: string = null;
  userPassword: string = null;

  // Message
  showMsg: boolean;
  msg: string;
  msgSeverity: string;

  constructor() { }

  ngOnInit() {
    this.isLogin = false;
    this.resetMsg();
  }


  onLogin() {
    if (this.studentModel.verifyId(this.userId)) {
      const user = this.studentModel.login(this.userId, this.userPassword);
      if (user) {
        this.isLogin = true;
        this.user = user;
        this.resetMsg();
      } else {
        this.setMsg('Invalid password', 'error');
      }
    } else {
      this.setMsg('Student ID not found', 'error');
    }
  }

  attendEvent() {
    if (this.studentModel.checkAttend(this.user)) {
      this.setMsg('ท่านได้ลงชื่อเข้าร่วมงานไปแล้ว', 'warn');
    } else {
      this.studentModel.attendEvent(this.user);
      this.setMsg('ลงชื่อเข้าร่วมงานสำเร็จ', 'success');
    }
  }

  unattendEvent() {
    this.studentModel.unattendEvent(this.user);
  }

  resetLoginField() {
    this.userId = null;
    this.userPassword = null;
  }

  onLogout() {
    this.user = null;
    this.isLogin = false;
    this.resetLoginField();
    this.resetMsg();
  }

  setMsg(msg: string, severity: string) {
    this.showMsg = true;
    this.msg = msg;
    this.msgSeverity = severity;
  }

  resetMsg() {
    this.showMsg = false;
    this.msg = '';
  }

  showAttendants() {
    return this.studentModel.countAttendants();
  }

  showUserId() {
    return this.studentModel.getStudentId(this.user);
  }


}
