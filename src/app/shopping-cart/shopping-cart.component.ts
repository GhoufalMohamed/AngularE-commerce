import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
carts:{name:String,designation:String,price:Number}[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  onAddCarts(event:any){
this.carts.push(event);
  }

}
