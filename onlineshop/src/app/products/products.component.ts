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
  sortDirection: string = 'asc';
  sortField: string = 'price';
  error: string;
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ]

  constructor(
    private http: Http, 
    private productsService: ProductsService)
     { }

  ngOnInit() {
    this.productsService.getAllProducts()
      .subscribe(
      data => this.products = data,
      error => this.error = error.statusText
    );
    this.productsService.newProductSubject
    .subscribe(
      data => this.products = [data, ...this.products]
    )
  }

}
