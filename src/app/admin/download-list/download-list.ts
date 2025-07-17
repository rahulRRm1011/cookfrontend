import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header';
import { Api } from '../../services/api';

@Component({
  selector: 'app-download-list',
  standalone: false,
  templateUrl: './download-list.html',
  styleUrl: './download-list.css'
})
export class DownloadList implements OnInit {
 downloads:any=[]
 constructor(private api:Api){}
 ngOnInit(): void {
   this.getDownloads()
 }
 getDownloads(){
  this.api.getAllDownload().subscribe((res)=>{
    this.downloads = res
    console.log(res)
  })
 }
}
