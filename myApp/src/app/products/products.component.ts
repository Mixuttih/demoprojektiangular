import { OnInit, Component } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
