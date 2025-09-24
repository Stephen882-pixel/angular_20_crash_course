import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {

  http = inject(HttpClient);

  userList:any[]=[];

  userObject: any = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
  };

  ngOnInit(): void {
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
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObject).subscribe({
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
  
  onEdit(item:any){
    this.userObject=item;
  }

  onUpdateUser(){
    //this.userObject.createdDate = new Date();
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObject.userId,this.userObject).subscribe({
      next:()=>{
        debugger;
        alert("User Updated Successfully");
        this.getUsers();
      },
      error:(error)=>{
        debugger;
        alert("Error -" + error);
      }
    })
  }

  onReset(){
  this.userObject = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
  };
  }

  onDeleteUser(id:number){
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
        next:()=>{
        debugger;
        alert("User deleted Successfully");
        this.getUsers();
      },
      error:(error)=>{
        debugger;
        alert("Error -" + error);
      }
    })
  }

}
