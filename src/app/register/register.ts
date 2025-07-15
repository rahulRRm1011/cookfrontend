import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Api } from '../services/api';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private api:Api,private router:Router) {
    this.registerForm = fb.group({
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  register(){
    if(this.registerForm.valid){
      const userName = this.registerForm.value.userName
      const email = this.registerForm.value.email
      const password = this.registerForm.value.password
      this.api.register({userName,password,email}).subscribe({
        next:(res)=>{
          alert("SUCCESFULLY REGISTERD")
            this.router.navigateByUrl('/login')
            this.registerForm.reset()
         },
         error:(err)=>{
          alert("failed to register")
          console.log(err)
          this.registerForm.reset()
         }
      })
    }
    else{
        alert("invalid form")
    }
  }
}
