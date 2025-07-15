import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Api } from '../services/api';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
    loginForm:FormGroup;
    constructor(private api:Api,fb:FormBuilder,private router:Router){
      this.loginForm= fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
    }
    
    login(){
      if(this.loginForm.valid){
        let email = this.loginForm.value.email
        let password = this.loginForm.value.password
        this.api.login({email,password}).subscribe({
          next:(res:any)=>{
            sessionStorage.setItem('user',JSON.stringify(res.user)
              )
            sessionStorage.setItem('token',res.token)

            alert("succesfully login")
            this.router.navigateByUrl('/')
            this.loginForm.reset
          },
          error:(err)=>{
          alert("failed to login")
          console.log(err)
          this.loginForm.reset
         }
        })
      }
      else{
        alert("invalid form")
      }
    }
}
