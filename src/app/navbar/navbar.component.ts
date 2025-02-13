import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

isuser=true
constructor(private fa:AngularFireAuth,  private router: Router,  private as:AuthService   ){
  this.as.user.subscribe(user=>{
    if(user){
      this.isuser=true
      }else{
        this.isuser=false   
      }
    
  })
}



  logout(){
this.fa.signOut()
.then(()=>{
 // console.log("logout done")
 this.router.navigate(['/login'])
})
.catch(()=>{
  console.log("error")
})
  }

}
