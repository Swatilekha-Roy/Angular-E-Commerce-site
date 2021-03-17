import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from '../cart.service';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route : ActivatedRoute,
    private cartSevice : CartService
    ) {}

    addToCart(product)
    {
      this.cartSevice.addToCart(product);
      window.alert('Your product has been added to the cart!')
    }

  ngOnInit() {
    //get product ID from current route
    const routeParams=this.route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParams.get('productId'));

    //find product with ID in route
    this.product=products.find(product => product.id === productIdFromRoute);
  }
}
