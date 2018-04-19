import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mUsername: string;
  mPassword: string;

  constructor() { }

  ngOnInit() {
  }

  onClickedSubmit() {
    console.log(this.mUsername);
    console.log(this.mPassword);
    if (this.mUsername === 'admin' && this.mPassword === 'admin') {
      window.alert('Login Success');
    } else {
      window.alert('Login Failed');
    }
  }

}
