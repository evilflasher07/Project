import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

  constructor(private http: Http) { }

  getCartItems(){
    return this.http.get('data/cartItems.json').map(res => res.json());
  }

}
