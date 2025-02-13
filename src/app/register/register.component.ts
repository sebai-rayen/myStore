import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService ,private fs:AngularFirestore, private router: Router) {}

  flname: string = '';
  mail: string = '';
  pass: string = '';


  register(form: NgForm) {
    if (form.valid) {
      const { mail, pass, flname } = form.value; // Ajout de flname
      this.authService.signup(mail, pass)
        .then((userCredential) => {
          if (userCredential.user) { // Vérification que user existe
            return this.fs.collection("users").doc(userCredential.user.uid).set({//this.fs.collection("users") hedi khasaa bi basse de doneer vd14
              flname: flname, // Utilisation de la variable récupérée
              mail: mail,
              uid: userCredential.user.uid
            });
          } else {
            throw new Error("Utilisateur non trouvé après l'inscription.");
          }
        })
        .then(() => {
          this.router.navigate(['/']);
          console.log("User registered successfully!");
        })
        .catch((error) => {
          console.error("Error during registration:", error);
        });
    } else {
      console.error("Form is invalid", form.value);
    }
  }
}
