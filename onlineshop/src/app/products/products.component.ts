import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ProductsService} from './../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;
  error: string;
  constructor(
    private http: Http, 
    private productsService: ProductsService)
     { }

  ngOnInit() {
    this.productsService.getAllProducts()
      .subscribe(
      data => this.products = data,
      error => this.error = error.statusText
    )
  }

}
