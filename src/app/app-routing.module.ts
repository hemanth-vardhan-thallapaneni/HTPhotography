import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { DownloadComponent } from './components/download/download.component';
import { AngularFireAuthGuard,
         redirectLoggedInTo,
        redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { UploadComponent } from './pages/upload/upload.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'mobilewallpapers',component:MobileComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path:'desktopwallpapers',component:DesktopComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path:'upload',component:UploadComponent},
  {path:'download',component:DownloadComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path:'signin',component:SigninComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLoggedInToHome}},
  { path:'signup', component:SignupComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLoggedInToHome}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
