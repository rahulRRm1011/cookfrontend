import { Component, OnInit } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-feedbacklist',
  standalone: false,
  templateUrl: './feedbacklist.html',
  styleUrl: './feedbacklist.css'
})
export class Feedbacklist implements OnInit{
  feedbacks:any=[]
  constructor(private api:Api){}
    ngOnInit(): void {
   this.getFeedback()
  }
  getFeedback(){
    this.api.getTestimonies().subscribe((res)=>{
      this.feedbacks=res
      console.log(res)
    })
  }
}
