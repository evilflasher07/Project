import { Component, OnInit, Input } from '@angular/core';
import {Product} from './../product'
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  
  constructor() { }

  ngOnInit() {
    
  }
}
