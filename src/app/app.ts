import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Admin} from './components/admin/admin';
import {User} from './components/user/user';
import {DataBinding} from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlow } from './components/control-flow/control-flow';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [ControlFlow,RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_20_tutorial');
  loggedUserName: string = '';

  constructor(private masterService: Master){
    this.readLoggedData();
    this.masterService.onLogin.subscribe(res=>{
    this.readLoggedData();
    })
    
  }

  readLoggedData(){
    const loggedData = localStorage.getItem("angular_20_user");
    if(loggedData != null){
      this.loggedUserName = loggedData;
    }
  }

  onLogout(){
    localStorage.removeItem(angular_20_user);
    this.readLoggedData();
    this.loggedUserName = ''; 
  }
}
 