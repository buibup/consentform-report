import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mUsername: string;
  mPassword: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickedSubmit() {
    console.log(this.mUsername);
    console.log(this.mPassword);
    if (this.mUsername === 'admin' && this.mPassword === 'admin') {
      this.router.navigate(['/customers']);
    } else {
      window.alert('Login Failed');
    }
  }

}
