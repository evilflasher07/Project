import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import {CartService} from './../services/cart.service'

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: Array<any>;
  error: string

  constructor(
    private http: Http,
    private cartService: CartService)
     { }

  ngOnInit() {
    this.cartService.getCartItems()
      .subscribe(
      data => this.cartItems = data,
      error => this.error = error.statusText
    )
  }

  

}
