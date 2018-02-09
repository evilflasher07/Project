import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @ViewChild('addProductForm') addProductForm: NgForm;
  propertyTypes: Array<string> = ['Organic Salon', 'Organic Product', 'Organic Farming'] ;

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
  }

  onAddClicked(data):void{
    this.productsService.addProduct(data);
    this.addProductForm.reset();
  }

}
