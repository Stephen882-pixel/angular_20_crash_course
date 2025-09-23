import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
    courseName: string = "Angular_20_tutorial";
    productPrice: number = 12500;
    maxlength : number = 5;
    minChar :number = 3;
    inputType :string = "checkbox";
    myClassName :string = "myColor";

    constructor() {

    }

    showWelcomeMsg() {
      alert("Welcome to Angular 20 Tutorial");
    }
    changeCourseName() {
      this.courseName = "Angular_20_tutorial - Updated";
    }
    onCityChange(){
      alert("City Changed");
    }
}
