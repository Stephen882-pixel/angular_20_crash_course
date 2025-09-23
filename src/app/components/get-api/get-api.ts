import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {

  http = inject(HttpClient);

  userList: any[] = [];

  listTodoItems: any[] = [];

  busBookingUserList: any[] = [];

  ngOnInit() {
    debugger;
    this.getUsers();
    this.getTodoItems();
    this.getAllBusBookingUser();
  }


  getUsers(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      debugger;
      this.userList = res;
      console.log(this.userList);
    });
  }

  getTodoItems(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((result:any) => {
      debugger;
      this.listTodoItems = result;
      console.log(result);
    })
  }

  getAllBusBookingUser(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((Response:any)=>{
      this.busBookingUserList = Response.data;
      console.log(Response);
    });
  }

}
