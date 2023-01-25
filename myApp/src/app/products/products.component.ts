import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products: Product[] | undefined;
  public product: Product | undefined;

  constructor(productService: ProductService){
    productService.listProducts().subscribe((data: Product[]) => this.products = data);
  }
}
