import { Component } from '@angular/core';
import { BackendService } from '../backend/backend.service'

@Component({
  selector: 'app-admincreateproduct',
  templateUrl: './admincreateproduct.component.html',
  styleUrls: ['./admincreateproduct.component.scss']
})
export class AdmincreateproductComponent {
  constructor(backend: BackendService){
    console.log(backend.getApi("/products").subscribe());
  }

}