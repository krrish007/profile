import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;
  constructor(private productService: ProductService) { console.log('details') }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.productService.getProduct().subscribe(data => { this.product= data; console.log(data)});
  }

}
