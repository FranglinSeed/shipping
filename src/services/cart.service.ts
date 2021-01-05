import { Injectable } from '@angular/core';

import { Product, products } from '../assets/global-variables/global-variables';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  constructor(private http: HttpClient,) { }

  addItem(item: Product) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<any> {
    return this.http.get("/assets/json/shipping.json");
  }
}
