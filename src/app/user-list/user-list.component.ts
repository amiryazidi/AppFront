import { Component, OnInit } from '@angular/core';
import {User} from "../core/model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listUser: User[];
  constructor() { }

  ngOnInit(): void {
    this.listUser=[
      {id: 1, username: 'Ahmed', name: 'Ahmed ben foulen', email: 'ahmed@gmail.com',role:'admin'},
      {id: 2, username: 'Ahmed', name: 'Ahmed ben foulen', email: 'ahmed@gmail.com',role:'simple user'},
      {id: 3, username: 'Ahmed', name: 'Ahmed ben foulen', email: 'ahmed@gmail.com',role:'admin'},
      {id: 4, username: 'Ahmed', name: 'Ahmed ben foulen', email: 'ahmed@gmail.com',role:'admin'},
    ];
  }
  delete(i:number):void{
    this.listUser.splice(i,1);
  }
}
