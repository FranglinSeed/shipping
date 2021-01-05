import { Component, OnInit } from '@angular/core';

import { Product, products } from "../../assets/global-variables/global-variables";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'shipping-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  constructor(private cartService: CartService,) {
    this.products = products;
  }

  ngOnInit(): void {
  }

  onShared(product) {
    this.cartService.addItem(product);
    alert(product.title + " is shared.");
  }

}
