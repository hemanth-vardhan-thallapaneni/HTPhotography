import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { HeaderComponent } from './layout/header/header.component';
import { DownloadComponent } from './components/download/download.component';
import { BestComponent } from './components/best/best.component';
import { HomeComponent } from './pages/home/home.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { SidebarModule } from 'ng-sidebar';
import { UploadComponent } from './pages/upload/upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    MobileComponent,
    DesktopComponent,
    HeaderComponent,
    DownloadComponent,
    BestComponent,
    HomeComponent,
    UploadComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot(),
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgbModule

  ],
  providers: [Image],
  bootstrap: [AppComponent]
})
export class AppModule { }
