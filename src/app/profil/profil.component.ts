import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  Uid: string | null = null;
  dataarry: any = {
    flname: '',
    image: '',
    mail: '',
    uid: '',
  };

  constructor(private as: AuthService, private fs: AngularFirestore) {
    this.as.user.subscribe(user => {
      if (user) {
        this.Uid = user.uid; // Set Uid only if user exists
      }
    });
  }

  ngOnInit(): void {
    const userId = localStorage.getItem("userconnect");
    if (!userId) return; // Prevent errors if userconnect is null

    this.fs.collection("users").ref.doc(userId).get().then((doc) => {
      if (doc.exists) {
        const userData = doc.data() as any; // ✅ Type assertion to avoid 'unknown' error
        console.log(userData);

        // ✅ Ensure that userData is not null/undefined before accessing properties
        if (userData) {
          this.dataarry.flname = userData.flname || '';
          this.dataarry.image = userData.image || '';
          this.dataarry.mail = userData.mail || '';
          this.dataarry.uid = userId;
        }
      } else {
        console.log("No such document!");
      }
    }).catch(error => {
      console.error("Error fetching user data:", error);
    });
  }
}



