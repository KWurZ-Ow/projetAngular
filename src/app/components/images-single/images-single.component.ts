import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-single',
  templateUrl: './images-single.component.html',
  styleUrls: ['./images-single.component.css']
})
export class ImagesSingleComponent implements OnInit {

  liked:boolean = false;
  
  liking() {
    this.liked = !this.liked
    
  }
  @Input() item:any = {};
  
  constructor() { }

  comments = [{content: "oui"}]

  add(content: string){
    console.log(content);
    
    if (content != ""){
      this.comments.push({content: content})
    }
  }

  ngOnInit(): void { 
  }

}
