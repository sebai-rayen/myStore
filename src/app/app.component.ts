import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
load=true;
load2=false;
  static app(app: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
  title = 'myStore';
ngOnInit():void{
setTimeout(() => {
  this.load=false
},100);


setTimeout(() => {
  this.load2=true
},100);






}
}
