import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import * as storage from 'firebase/storage';
import * as db from 'firebase/database';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
pictures= [];

}


const Imagesdelatils = [    
    { "id": 1, "name": "Apple", type: "mobile", "url": "assets/images/abstract.jpeg" },    
    { "id": 2, "name": "Apple","type": "desktop","url": "assets/images/ab1.jpeg" },    
    { "id": 3, "name": "Apple","type": "desktop","url": "assets/images/ab2.jpeg" },    
    { "id": 4, "name": "Apple","type": "desktop", "url": "assets/images/architecture.jpeg" },    
    { "id": 5, "name": "Apple","type": "mobile", "url": "assets/images/birds.jpeg" },    
]    




