import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";
import {CalculService} from "../core/services/calcul.service";
import {ProductService} from "../core/services/product.service";

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
  stockAlert: number;

  constructor(private calcul: CalculService, private productService: ProductService) { }

  ngOnInit(): void {
    this.title= "MyApp Store";
    this.show=false;
    this.listProduct= this.productService.list;
    this.stockAlert= this.calcul.getBilan(this.listProduct,'quantity',0);


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
