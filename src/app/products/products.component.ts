import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:{name:String,designation:String,price:Number}[]=[
  {name:"Montre",designation:"Ceci est une montre XIAOMI",price:300}];
  @Output() AddCart : EventEmitter<{name:String,designation:String,price:Number}> = new EventEmitter<{name:String,designation:String,price:Number}>();


  constructor() { }

  ngOnInit(): void {
  }
  onAddProduct(event:{name:String,designation:String,price:number}){
  this.products.push(event);
  }
  onAddCart(ind:number){
let prod =this.products[ind];
console.log(prod);
this.AddCart.emit(prod);
  }

}
