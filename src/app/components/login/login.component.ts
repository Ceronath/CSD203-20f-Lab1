import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string= "";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {}

  signInWithGoogle(){
    this.auth.signInWithGooglePopUp();
  }

  signIn(){
    this.auth.signInWithEmail(this.email, this.password).then(() => this.router.navigate(["/user-profile"], { queryParams: { id: 1 } })).catch(err => alert(err));
    
  }
}
