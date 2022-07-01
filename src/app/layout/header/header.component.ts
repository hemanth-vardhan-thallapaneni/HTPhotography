import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable,BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import AOS from 'aos';
import { AngularFireDatabase, AngularFireList, AngularFireAction} from '@angular/fire/database';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
 email:string = null;
 main = "hemanthvardhantrash@gmail.com";
 admin = false;
 itemsRef : AngularFireList<any>;
items: string;
items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
name$: BehaviorSubject<string|null>;
navbarOpen = false;

  constructor(private auth: AuthService,
              private router: Router,
              private db: AngularFireDatabase,
              private toastr: ToastrService) {
                auth.getUser().subscribe((user)=>{
                  this.email = user?.email;
                  if (this.email == this.main) {
                     this.admin = true; 
                  }
                });
                this.name$ = new BehaviorSubject(null);
                this.items$ = this.name$.pipe(
                  switchMap(name =>
                    db.list('images', ref =>
                     name ? ref.orderByChild('name').equalTo(name): ref).snapshotChanges()
                  )
                   )
               }  

               filterBy(name: string|null){
                this.name$.next(name);
              }
                removeNavBar(){
                  this.navbarOpen = false;
                }
              toggleNavBar(){
                this.navbarOpen = !this.navbarOpen;
              }
      async logout(){
        await this.auth.signOut();
        this.admin = false;
       this.router.navigateByUrl("/sigin");
       this.email = null;
      }



  ngOnInit(): void {
    AOS.init();
  }

}
