import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  isParagraphVisible : boolean = false;

  startingMonthName: string = "feb";

  cityList : string[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  studentList: any[] = [
    {name:'AAAA',city:'New York',isActive:false},
    {name:'BBBB',city:'Los Angeles',isActive:false},
    {name:'CCCC',city:'Chicago',isActive:true},
    {name:'DDDD',city:'Houston',isActive:false}
  ]

  showP(){
    this.isParagraphVisible = true
  }
  hipeP(){
    this.isParagraphVisible = false
  }

}
