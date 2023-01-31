import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admineditproduct',
  templateUrl: './admineditproduct.component.html',
  styleUrls: ['./admineditproduct.component.scss']
})
export class AdmineditproductComponent {
  public id : string = ""

  createProductForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    price: new FormControl<number>(0),
    category: new FormControl<"Computer" | "Laptop">('Computer')
  });

  constructor(private productService: ProductService, private route: ActivatedRoute){
    route.params.subscribe(params => {
      this.id = params['id'];
      this.loadData()
    })
  }

  loadData(): void {
    this.productService.readProduct(this.id).subscribe(
      (data: Product) => {
        this.createProductForm.setValue(
          {
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category
          }
        )
      }
    )
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.id)
      .subscribe();
      /* TODO redirect user to edit form after successfull creation */ 
  }

  onSubmit(): void {
    let data : Product = {
      _id: this.id,
      name: this.createProductForm.value.name ?? "",
      description: this.createProductForm.value.description ?? "",
      price: this.createProductForm.value.price ?? 0,
      category: this.createProductForm.value.category ?? "Computer"
    }
    
    this.productService.updateProduct(this.id, data)
      .subscribe(
        (data: Product[]) => console.log(data)
      );
      /* TODO redirect user to edit form after successfull creation */ 
  }
}
