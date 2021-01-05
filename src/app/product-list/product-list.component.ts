import { Component, OnInit } from '@angular/core';

import { Product, products } from "../../assets/global-variables/global-variables";

@Component({
  selector: 'shipping-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  constructor() {
    this.products = products;
  }

  ngOnInit(): void {
  }

}
