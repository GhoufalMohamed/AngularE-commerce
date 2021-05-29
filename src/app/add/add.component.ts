import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
name:String="";
designation:String="";
price:number=0.0;
@Output()Add: EventEmitter<{name:String,designation:String,price:number}> = new EventEmitter<{name:String,designation:String,price:number}>();

  constructor() { }

  ngOnInit(): void {
  }
  onAdd(){
    let product={name:this.name,designation:this.designation,price:this.price};

    this.Add.emit(product);
  }


}
