import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private image: ImageService) {
   }
   

  ngOnInit(): void {
    AOS.init();
  }

}
