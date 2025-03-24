import { Component } from '@angular/core';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 })
 export class AppComponent {
   title = 'AngularProject';
  imgUrl= "/assets/BridgeLabz.jpg";
  url = "C:\Users\tanya\OneDrive\Desktop\BridgeLabz.jpg";

 ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";

  }
// }


  onClick($event){
    console.log("Save button is clicked!",$event);
    window.open(this.url, "_blank");

  }
}
