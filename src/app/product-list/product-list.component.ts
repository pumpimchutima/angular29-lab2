import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];

  constructor() { 
    this.products = [];
    this.products.push({
      name:'Orage',
      price:990
    });
    this.products.push({
      name:'Apple',
      price:500
    });
    this.products.push({
      name:'Banana',
      price:20
    });
  }

  ngOnInit(): void {
  }

  selectedProduct(product:Product){

    alert(`Product ${product.name} selected`);

  }
}
