import { Component, OnInit } from '@angular/core';
import * as faker from "faker";

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  constructor() { }

  
  data = [
    {
      username: faker.internet.userName(),
      location: faker.address.cityName(),
      avatar: faker.image.avatar(),
      image: faker.image.imageUrl( 332, 249, undefined, true, true),
      likes: faker.datatype.number({'min': 0,'max': 15}),
      description: faker.lorem.paragraph(1)
    },
    {
      username: faker.internet.userName(),
      location: faker.address.cityName(),
      avatar: faker.image.avatar(),
      image: faker.image.imageUrl( 332, 249, undefined, true, true),
      likes: faker.datatype.number({'min': 0,'max': 15}),
      description: faker.lorem.paragraph(1)
    },
    {
      username: faker.internet.userName(),
      location: faker.address.cityName(),
      avatar: faker.image.avatar(),
      image: faker.image.imageUrl( 332, 249, undefined, true, true),
      likes: faker.datatype.number({'min': 0,'max': 15}),
      description: faker.lorem.paragraph(1)
    },
    {
      username: faker.internet.userName(),
      location: faker.address.cityName(),
      avatar: faker.image.avatar(),
      image: faker.image.imageUrl( 332, 249, undefined, true, true),
      likes: faker.datatype.number({'min': 0,'max': 15}),
      description: faker.lorem.paragraph(1)
    },
    {
      username: faker.internet.userName(),
      location: faker.address.cityName(),
      avatar: faker.image.avatar(),
      image: faker.image.imageUrl( 332, 249, undefined, true, true),
      likes: faker.datatype.number({'min': 0,'max': 15}),
      description: faker.lorem.paragraph(1)
    },
    {
      username: faker.internet.userName(),
      location: faker.address.cityName(),
      avatar: faker.image.avatar(),
      image: faker.image.imageUrl( 332, 249, undefined, true, true),
      likes: faker.datatype.number({'min': 0,'max': 15}),
      description: faker.lorem.paragraph(1)
    }
  ]
  
  ngOnInit(): void {
  }

}
