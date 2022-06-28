import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;


  constructor(private fb:FormBuilder,private auth:AuthService,private route:Router) { 
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
  });
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.form.value).subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.route.navigate(['/home']);
      },
      err=>console.log(err)
    )
  }

}
