import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireAction, snapshotChanges } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { AngularFireStorage } from '@angular/fire/storage';
import { canActivate } from '@angular/fire/auth-guard';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
itemsRef : AngularFireList<any>;
items: string;
items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
name$: BehaviorSubject<string|null>;
  constructor(private storage: AngularFireStorage,
              private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              private router: Router,
              private toastr: ToastrService,
              private auth: AuthService
              )
               {
                    this.name$ = new BehaviorSubject(null);
                    this.items$ = this.name$.pipe(
                    switchMap(name =>
                    db.list("desktop", ref =>
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
  navbarOpen = false;
  images: any;
  filter = false;
  nonfilter = true;
  ngOnInit() {  
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

