import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../assets/global-variables/global-variables';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'shipping-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product:Product;
  public shippingCosts = this.cartService.getShippingPrices();
  constructor(private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    this.product = products.find( product => {
      return Number(productIdFromRoute) === product.id;
    });
  }

}
