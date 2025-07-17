import { Component, OnInit } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {
 users:any=[]
constructor(private api:Api){}
ngOnInit(): void {
  this.getUsers()
}
getUsers(){
  this.api.getAllUser().subscribe((res)=>{
    this.users=res
    console.log(res)
  })
}


}
