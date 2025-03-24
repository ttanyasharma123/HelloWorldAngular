import { Component } from '@angular/core';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 })
 export class AppComponent {
   title = 'AngularProject';
  imgUrl= "/assets/BridgeLabz.jpg";
  url = "https://www.bridgelabz.com";
  userName: string ="";
  nameError: string = "";

 ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";

  }
// }


  onClick($event: Event){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");

  }
  onInput(){
    console.log("Change Event Occured!",this.userName);
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      

    }else{
    this.nameError = "Name is Incorrect!";
  }
}
 }
