import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../shared/ingredient.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: IIngredient[] = [
    {
      name: 'Apple',
      amount: 5
    },
    {
      name: 'Tomato',
      amount: 10
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient: any): void {
    this.ingredients.push(ingredient);
  }
}
