import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-admincreateproduct',
  templateUrl: './admincreateproduct.component.html',
  styleUrls: ['./admincreateproduct.component.scss']
})
export class AdmincreateproductComponent {
  createProductForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    price: new FormControl<number>(0),
    category: new FormControl<"Computer" | "Laptop">('Computer')
  });

  constructor(private productService: ProductService){
  }

  onSubmit(): void {
    let data : Product = {
      _id: "",
      name: this.createProductForm.value.name ?? "",
      description: this.createProductForm.value.description ?? "",
      price: this.createProductForm.value.price ?? 0,
      category: this.createProductForm.value.category ?? "Computer"
    }
    
    this.productService.createProduct(data)
      .subscribe(
        (data: Product[]) => console.log(data)
      );
      /* TODO redirect user to edit form after successfull creation */ 
  }
}