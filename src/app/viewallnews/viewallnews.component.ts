import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-viewallnews',
  templateUrl: './viewallnews.component.html',
  styleUrls: ['./viewallnews.component.css']
})
export class ViewallnewsComponent implements OnInit {

  constructor(private api:NewsService) {this.dataFromNews()}
  dataFromNews=()=>{
 this.api.fetchNews().subscribe(
  (response:any)=>{
    this.news=response.articles
    
  }
 )
  }
  news:any=[]

  ngOnInit(): void {
  }

}
