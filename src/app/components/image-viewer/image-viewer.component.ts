import { Component, Input, OnInit } from '@angular/core';
import {Image} from "../../models/images-interface";

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  
  @Input()images!: Image[];
  @Input()revertedBackground!: boolean;

  constructor() { }
  
  ngOnInit(): void {
  }

}
