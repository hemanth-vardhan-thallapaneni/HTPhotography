import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { finalize, timestamp } from 'rxjs/operators';
import { image } from 'src/app/image';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
   file: File;
   picture: string;
   type:string;
   name: string;
   user = null;
   uploadPercent : number = null;
   
  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private toastr: ToastrService,
    auth: AuthService) {
       
    }
    customDesktop = this.db.list(`/desktop`);
    custommobile = this.db.list(`/mobile`);

    createMobImage(event){
      return this.custommobile.push({
             name: this.name,
             picture : this.picture,
           })
    }

    createImage(event){
      return this.customDesktop.push({
             name: this.name,
             picture : this.picture,
           })
    }

  ngOnInit(): void {
  }

   async uploadFile(event){
     const file =event.target.files[0];
     const filePath = file.name;
     const fileRef = this.storage.ref(filePath);

     const task = this.storage.upload(filePath,file);

     task.snapshotChanges().pipe(
       finalize(()=>{
         fileRef.getDownloadURL().subscribe((url)=>{
           this.picture = url;
           console.log(url)
           this.toastr.success("Image Uploaded");
         })
       })
     ).subscribe();
   }
}
