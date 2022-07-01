
import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireAction, snapshotChanges } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ImageService } from '../../image.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { canActivate } from '@angular/fire/auth-guard';
import AOS from 'aos';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

itemsRef : AngularFireList<any>;
items: string;
items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
name$: BehaviorSubject<string|null>;
navbarOpen = false;
  constructor(private storage: AngularFireStorage,
              private db: AngularFireDatabase,
              )
               {
                     this.name$ = new BehaviorSubject(null);
                     this.items$ = this.name$.pipe(
                       switchMap(name =>
                         db.list("mobile", ref =>
                          name ? ref.orderByChild('name').equalTo(name): ref).snapshotChanges()
                         
                       )
                      
                        )
               };
              removeNavBar(){
                this.navbarOpen = false;
              }
              toggleNavBar(){
                this.navbarOpen = !this.navbarOpen;
              }
  images: any;
  filter = false;
  nonfilter = true;
  ngOnInit() {  
    AOS.init();  
     this.db.list('/images').valueChanges()
     .subscribe(images =>{
          this.images = images;
     })    
  } 

 filterBy(name: string|null){
  this.name$.next(name);
  this.filter = true;
  this.nonfilter = false;
}



}
// storearr=this.cato()
