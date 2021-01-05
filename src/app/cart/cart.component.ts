import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../assets/global-variables/global-variables';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shipping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items: Product[] = [];
  public checkoutForm: FormGroup;
  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems();
    this.checkoutForm = formBuilder.group({
      name: '',
      password: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
    this.items = this.cartService.clearItems();
    this.checkoutForm.reset();
    alert('Your order has been submitted. name = ' + customerData.name + ' & password = ' + customerData.password);
  }

}
