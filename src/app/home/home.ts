import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Api } from '../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  projects: any = [];
  testimonials: any = [];

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.getProjects();
    this.getTestimony(); // ✅ This was missing
  }

  getProjects() {
    this.api.getLimitedProjects().subscribe((res) => {
      console.log(res);
      this.projects = res;
    });
  }

  getTestimony() {
    this.api.getTestimonies().subscribe((res) => {
      console.log(res);
      this.testimonials = res;
    });
  }
}
