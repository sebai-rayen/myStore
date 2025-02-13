import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { elementAt, finalize } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-produts',
  templateUrl: './my-produts.component.html',
  styleUrls: ['./my-produts.component.css']
})
export class MyProdutsComponent {


  Uid: string | null = null;
  message: string = '';
  dataarry: any[] = [];
  selectedProduct: any = { id: '', title: '', text: '', image: '' };

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

  delete(id:string){
this.fs.collection("products").doc(id).delete()
  }

  openUpdateModal(product: any) {
    this.selectedProduct = { ...product }; // Copier les valeurs du produit sélectionné
  }
 
  updateProduct() {
    if (this.selectedProduct.id) {
      this.fs.collection("products").doc(this.selectedProduct.id).update({
        title: this.selectedProduct.title,
        text: this.selectedProduct.text,
        image: this.selectedProduct.image
      })
    }
  }


  


  }