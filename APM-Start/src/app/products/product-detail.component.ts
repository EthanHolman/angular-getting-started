import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productSvc: ProductService) {
    
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); // + means convert string to numeric ID
    this.pageTitle += ": " + id;
    this.product = {
      "productId": 100,
      "productName": "Sports Car",
      "productCode": "0to60-FAST",
      "releaseDate": "February 1, 2015",
      "description": "Really fast red lambo",
      "price": 250000.00,
      "starRating": 5.0,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/2987/ryanlerch-Red-Lamborghini.png"
    }
    
    console.log("[ProductDetail] About to print all products??");
    console.log(this._productSvc.getProducts2());
    console.log("[ProductDetail] END of print all products");

  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
