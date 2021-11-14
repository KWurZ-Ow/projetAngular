import { Component, OnInit } from '@angular/core';
import {Image} from "../../models/images-interface";
import * as faker from 'faker';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {
  
  images: Image[] = []
  
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.images.push(
        new Image({
          username: faker.internet.userName(),
          location: faker.address.cityName(),
          avatar: faker.image.avatar(),
          image: faker.image.imageUrl( 332, 249, undefined, true, true),
          likes: faker.datatype.number({'min': 0,'max': 15}),
          description: faker.lorem.paragraph(1)
        })
        )
      }
    }
    
    
    ngOnInit(): void {
    }
    
  }
  