import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) { }
  product = {
    productID: '',
    productName: '',
    totalQuantity: '',
    price: ''
  }
  ngOnInit() {
  }

  saveProduct(product) {   
    this.productService.saveProduct(product).subscribe(data => { alert('Item saved') })
  }

  


}
