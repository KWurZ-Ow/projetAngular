import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()page!:string

  constructor(private router: Router) { }

  navigationButton(path:string){
    this.router.navigateByUrl(`/${path}`)
  }
  ngOnInit(): void {
  }

}
