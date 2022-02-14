import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
  list: Product[];
  constructor() { }

  ngOnInit(): void {
    this.list = [
      {id: 1, name: 'T-shirt 1',description: 'Lorem ing elit', price: 15, nbrLike: 0, quantity: 10, picture: 'assets/images/t_shirt1.jpg'},
    ]
  }

}
