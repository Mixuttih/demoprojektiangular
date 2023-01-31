import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent {
  public id: string = ""
  public product: Product = {
    _id: "undefined",
    name: "...",
    description: "...",
    price: 99.99,
    category: "Computer"
  }

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router){
    route.params.subscribe(params => {
      this.id = params['id'];
      this.loadData()
    })
  }

  loadData(): void {
    this.productService.readProduct(this.id).subscribe(
      (data: Product) => {
        this.product = data
      }
    )
  }

}
