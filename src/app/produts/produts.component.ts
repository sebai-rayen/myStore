import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { setUserId } from 'firebase/analytics';


@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {
Uid: string | null = null; // Uid peut être null
message: string = "";

dataarry: any[] = [];



constructor(private fs: AngularFirestore, private fa: AuthService, private storage: AngularFireStorage) {
    this.fa.user.subscribe(user=>{
      if (user) {
        this.Uid = user.uid; // Set Uid only if user exists
      }
    })
  }



  ngOnInit(): void {
    this.fs.collection("products").snapshotChanges().subscribe((data) => {
      this.dataarry = data.map(element => {
        const item = element.payload.doc.data() as any; // Typecasting
        return {
          id: element.payload.doc.id,
          title: item['title'], // Ensure consistent field names
          text: item['text'],
          image: item['image'],
          Uid: item['Uid']
        };
      });
    });
  }





  
  ajout(form: NgForm) {
    if (form.valid && this.Uid) { // Vérifie si le formulaire est valide et si Uid existe
      let data = form.value;
this.fs.collection("products").add({
  title: data.title,
        text: data.text,
        image: data.image,
        Uid: this.Uid
      }).then(() => {
        this.message = "Produit ajouté avec succès !";
        console.log(this.message)
      }).catch((error) => {
        console.error("Erreur lors de l'ajout du produit :", error);
        this.message = "Erreur lors de l'ajout du produit.";
        console.log(this.message)
      });
    } else {
      this.message = "Formulaire invalide ou utilisateur non connecté.";
      console.log(this.message)
    }
  }
}

