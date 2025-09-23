import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = 'John';
  productName = "Laptop"
  courseName = signal<string>('Angular') 
  courseDuration = signal("15 videos")
  courseDetails = computed(()=> this.courseName() + " " + this.courseDuration())

  constructor() {
    this.firstName = "Doe"
    console.log(this.firstName);
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set("React")
    }, 5000);
    
    console.log(this.courseName());
  }

}
