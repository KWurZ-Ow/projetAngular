import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-single',
  templateUrl: './images-single.component.html',
  styleUrls: ['./images-single.component.css']
})
export class ImagesSingleComponent implements OnInit {

  liked:boolean = false;

  displayComments:boolean = false
  
  @Input() item:any = {};
  @Output() displayCommentsEvent = new EventEmitter<boolean>()
  
  liking() {
    this.liked = !this.liked
    this.item.likes += 1
  }
  
  constructor() { }

  emitDisplayCommentsEvent() {
    this.displayCommentsEvent.emit(this.displayComments)
    this.displayComments = !this.displayComments
  }

  onDisplayCommentsChange(){

  }

  add(content: string){
    if (content != ""){
      this.item.comments.push({content: content, avatar: this.item.avatar})
    }
  }

  ngOnInit(): void { 
  }

}
