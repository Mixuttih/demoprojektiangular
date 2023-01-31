import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public products: Product[] | undefined;

  constructor(private productService: ProductService){
  }

  ngOnInit() {
    this.productService.listProducts()
      .subscribe(
        (data: Product[]) => this.products = data
      );
  }
}
