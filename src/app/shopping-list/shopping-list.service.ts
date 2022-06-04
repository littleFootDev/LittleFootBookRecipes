
import {Subject} from 'rxjs';
import { IIngredient } from "../shared/ingredient.interface";

export class SoppingListService {
    ingredientChanged = new Subject<IIngredient[]>();
    startedEditing = new Subject<number>();

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

    getIngredient(index: number) {
      return this.ingredients[index]
    }

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

    updateIngredient(index: number, newIngredient: IIngredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientChanged.next(this.ingredients.slice())
    }
}