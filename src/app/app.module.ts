import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { ProdutsComponent } from './produts/produts.component';
import { MyProdutsComponent } from './my-produts/my-produts.component';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; 
import { environment } from './environment';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';
import { MyStoreComponent } from './my-store/my-store.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    ProdutsComponent,
    MyProdutsComponent,
    RegisterComponent,
    LoadingComponent,
    FooterComponent,
    MyStoreComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
