import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
//import { User } from 'firebase/auth'; 
import firebase from 'firebase/compat/app'; // Import Firebase Compat
import 'firebase/compat/auth'; // Import Auth Compat pour éviter les conflits
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  user: Observable<firebase.User | null>;
  constructor(private fa:AngularFireAuth) {
    this.user = this.fa.user;
   }

signup(mail: string,pass: string){
 return this.fa.createUserWithEmailAndPassword(mail,pass)
}
signin(email: string,password: string){
  return(this.fa.signInWithEmailAndPassword(email,password))
}


}
