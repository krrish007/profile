import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  productIdList;
  productID;
  quantity;
  totalPrice;
  productList = [];
  selectedItem = {
    productID: '',
    productName: '',
    totalQuantity: '',
    price: 0
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();

  }

  getProduct() {
    this.productService.getProduct().subscribe(data => { this.productIdList = data; console.log(data) });
  }

  deleteProduct() {
    this.productService.deleteProduct().subscribe(data => { console.log(data) });
  }

  onSelect(item) {
    var item = this.productIdList.filter(x => x.productID === item);
    console.log(item);
    this.selectedItem = item[0];
  }

  addItem(quantity) {
    console.log(quantity)
    var itemList = {
      id: '',
      name: '',
      price: 0,
      quantity: 0,
      totalPrice: 0
    }
    itemList.id = this.selectedItem.productID;
    itemList.name = this.selectedItem.productName;
    console.log(this.selectedItem.price)
    itemList.price = this.selectedItem.price;
    itemList.quantity = quantity;
    itemList.totalPrice = (itemList.price * quantity);
    this.productList.push(itemList);
    console.log(this.productList);
  }

}



