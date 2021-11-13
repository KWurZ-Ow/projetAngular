import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

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

  comments = [{content: "test de commentaire"}]
  new: string = ""

  add(){
    console.log(this.new);
    
    if (this.new != ""){
      this.comments.push({content: this.new})
    }
    this.new = ""
  }

  ngOnInit(): void { 
  }

}
