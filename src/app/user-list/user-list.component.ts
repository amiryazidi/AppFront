import { Component, OnInit } from '@angular/core';
import {User} from "../core/model/user";
import {CalculService} from "../core/services/calcul.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listUser: User[];
  countAdmin: number
  constructor(private calcul: CalculService) { }

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
  getNumber(){
  this.countAdmin= this.calcul.getBilan(this.listUser,'role','admin')
  }
}
