import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutsComponent } from './produts/produts.component';
import { MyProdutsComponent } from './my-produts/my-produts.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'load',component:LoadingComponent},
  {path:'login',component:LoginComponent},
  {path:'my-Produts',component:MyProdutsComponent},
  {path:'produts',component:ProdutsComponent},
  {path:'profil',component:ProfilComponent},
  {path:'register',component:RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
