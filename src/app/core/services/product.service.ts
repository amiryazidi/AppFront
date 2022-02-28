import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list:Product[]=
    [
      {id: 1, name: 'T-shirt 1',description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 15, nbrLike: 0, quantity: 10, picture: 'assets/images/t_shirt1.jpg'},
      {id: 2, name: 'T-shirt 2',description: 'Ad corporis culpa eligendi, esse fugit id illo ipsam iste iusto ', price: 65, nbrLike: 0, quantity: 0, picture: 'assets/images/t_shirt1.jpg'},
      {id: 3, name: 'T-shirt 3',description: 'magnam natus porro quibusdam quisquam quod saepe sequi', price: 120, nbrLike: 0, quantity: 2, picture: 'assets/images/t_shirt1.jpg'},
    ];

  constructor() { }
}
