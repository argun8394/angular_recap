import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id:1, name: 'car ', price: '109', color:"black", available: "Available",image: "../../assets/products/volk.jpg.jpg"},
    {id:2, name: 'car', price: '109', color:"black", available: "Not Available",image: "../../assets/products/volk.jpg.jpg"},
    {id:3, name: 'car', price: '109', color:"black", available: "Available",image: "../../assets/products/volk.jpg.jpg"},
  ]

}
