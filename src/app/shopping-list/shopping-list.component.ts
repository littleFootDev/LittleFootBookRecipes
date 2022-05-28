import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../shared/ingredient.interface';
import { SoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  public ingredients!: IIngredient[];
  constructor(private slService : SoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged
      .subscribe(
        (ingredients: IIngredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  onIngredientAdded(ingredient: any): void {
    this.ingredients.push(ingredient);
  }
}
