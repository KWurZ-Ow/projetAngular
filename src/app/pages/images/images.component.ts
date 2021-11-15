import { Component, OnInit } from '@angular/core';
import {Image} from "../../models/images-interface";
import * as faker from 'faker';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {
  
  imagesHome: Image[] = []
  imagesSubscription: Image[] = []
  imagesPersonnal: Image[] = []
  
  constructor() {
    for (let i = 0; i < 18; i++) {
      this.imagesHome.push(
        new Image({
          username: faker.internet.userName(),
          location: faker.address.cityName(),
          avatar: faker.image.avatar(),
          image: faker.image.imageUrl( 332, 249, undefined, true, true),
          likes: faker.datatype.number({'min': 150,'max': 900}),
          description: faker.lorem.paragraph(1),
          comments: [{
            content: faker.lorem.lines(1),
            avatar: faker.image.avatar()
          }]
        })
        )
      }
      for (let i = 0; i < 9; i++) {
        this.imagesSubscription.push(
          new Image({
            username: faker.internet.userName(),
            location: faker.address.cityName(),
            avatar: faker.image.avatar(),
            image: faker.image.imageUrl( 332, 249, undefined, true, true),
            likes: faker.datatype.number({'min': 0,'max': 15}),
            description: faker.lorem.paragraph(1),
            comments: [{
              content: faker.lorem.lines(1),
              avatar: faker.image.avatar()
            }]
          })
          )
        }
        let fakerProfile = {
          username: faker.internet.userName(),
          avatar: faker.image.avatar(),
        }
        for (let i = 0; i < 6; i++) {
          this.imagesPersonnal.push(
            new Image({
              username: fakerProfile.username,
              location: faker.address.cityName(),
              avatar: fakerProfile.avatar,
              image: faker.image.imageUrl( 332, 249, undefined, true, true),
              likes: faker.datatype.number({'min': 0,'max': 15}),
              description: faker.lorem.paragraph(1),
              comments: [{
                content: faker.lorem.lines(1),
                avatar: faker.image.avatar()
              }]
            })
            )
          }
        }
        
        
        ngOnInit(): void {
        }
        
      }
      