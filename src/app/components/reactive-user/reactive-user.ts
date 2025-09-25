import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {

  http = inject(HttpClient);
  userList:any[]=[];

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl("",[Validators.required,Validators.minLength(5)]),
    fullName: new FormControl(""),
    mobileNo: new FormControl(""),
    password: new FormControl("",Validators.required)
  })

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((Result:any)=>{
      this.userList=Result;
      console.log(Result);
    });
  }

   onSaveUser(){
    debugger;
    const formValue = this.userForm.value;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",formValue).subscribe({
      next:(Result)=>{
        debugger;
        alert("User Registered Successfully");
        this.getUsers();
      },
      error:(error)=>{
        debugger;
        alert("Error -" + error);
      }}
    )
  }

}
