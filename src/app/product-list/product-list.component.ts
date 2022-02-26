import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string;
  priceMax : number;
  listProduct: Product[];
  show:boolean;
  constructor() { }

  ngOnInit(): void {
    this.title= "MyApp Store";
    this.show=false;
    this.listProduct = [
      {id: 1, name: 'T-shirt 1',description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 15, nbrLike: 0, quantity: 10, picture: 'assets/images/t_shirt1.jpg'},
      {id: 2, name: 'T-shirt 2',description: 'Ad corporis culpa eligendi, esse fugit id illo ipsam iste iusto ', price: 65, nbrLike: 0, quantity: 0, picture: 'assets/images/t_shirt1.jpg'},
      {id: 3, name: 'T-shirt 3',description: 'magnam natus porro quibusdam quisquam quod saepe sequi', price: 120, nbrLike: 0, quantity: 2, picture: 'assets/images/t_shirt1.jpg'},
    ];
  }
  incrementLike(product: Product){
   // this.listProduct[i].nbrLike++;
    let i= this.listProduct.indexOf(product);
    if(i!=-1){
      this.listProduct[i].nbrLike++;
    }
  }
  showForm(): void{
    this.show = true;
  }

  saveProduct(p:Product){
    this.listProduct.push(p);
    this.show=false;
  }
}
