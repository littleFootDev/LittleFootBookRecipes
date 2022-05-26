import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { IIngredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: false }) amoutInputRef! : ElementRef<HTMLInputElement>;

  @Output() ingredientAdded = new EventEmitter<IIngredient>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.nameInputRef);
  }
  
  
  onAddItem(): void {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = + this.amoutInputRef.nativeElement.value;
    const newIngredient: IIngredient = {
      name: ingName,
      amount: ingAmount
    } ;

    this.ingredientAdded.emit(newIngredient)
    
    
  }
}


