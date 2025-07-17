import { Component } from '@angular/core';
import { Api } from '../services/api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-component',
  imports: [ReactiveFormsModule,CommonModule,Header],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css'
})
export class ContactComponent {
   constructor(private api:Api,private fb:FormBuilder){
         this.testimonyForm=this.fb.group({
          name:['',[Validators.required,Validators.pattern("[A-Za-z]*")]],
          email:['',[Validators.required,Validators.email]],
          message:['',[Validators.required]]
         })

   }
   testimonyForm:FormGroup
   onSubmit(){
    if(this.testimonyForm.valid){
     const name = this.testimonyForm.value.name
     const email = this.testimonyForm.value.email
     const message = this.testimonyForm.value.message

     try {
       this.api.addTestimony({name,email,message}).subscribe(res=>{
        alert("Succesfully added testimony")
       })
     } catch (error) {
      alert(error)
     }

    }else{
      alert("invalid form")
    }
   }
}
