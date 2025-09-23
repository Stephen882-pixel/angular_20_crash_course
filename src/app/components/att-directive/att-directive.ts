import { NgClass, NgStyle } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  div1ClassName = signal<string>("");

  isDiv2Green: boolean = false;

  constructor() { 
    console.log("Constructor")
  }
  
  ngOnInit(): void {
      console.log("ngOnInit")
      // to trigger api calls
      // to subscribe 
  }

  ngAfterContentInit(): void {
      console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit")
      // to deal with child components
      // subsccribe 
  }
  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
      console.log("ngOnDestroy")
      // to unsubscribe
      // restrict user from navigating away
  }


  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

}
