import { EventEmitter } from "@angular/core";
import {Subject} from 'rxjs';
import { IIngredient } from "../shared/ingredient.interface";

export class SoppingListService {
    ingredientChanged = new EventEmitter<IIngredient[]>();

    private ingredients: IIngredient[] = [
        {
          name: 'Apple',
          amount: 5
        },
        {
          name: 'Tomato',
          amount: 10
        }
    ];

    getIngredients() : IIngredient[] {
        return this.ingredients.slice();
    };

    addIngredient(ingredient: IIngredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    };

    addIngredients(ingredients: IIngredient[]) {
      // for(let ingredient of ingredients) {
      //   this.addIngredient(ingredient);
      // }
      this.ingredients.push(...ingredients);
      this.ingredientChanged.next(this.ingredients.slice());
    }
}