import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IIngredient } from "../shared/ingredient.interface";
import { SoppingListService } from "../shopping-list/shopping-list.service";
import { IRecipe } from "./recipe.interface";


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<IRecipe[]>();
    
   private recipes : IRecipe[] = [];

    constructor(private slService : SoppingListService) {}
    
    setRecipes(recipes: IRecipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    };

    getRecipe(index : number) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients : IIngredient[]) {
      this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: IRecipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index : number, newRecipe: IRecipe) { 
      this.recipes[index] = newRecipe
      this.recipesChanged.next(this.recipes.slice());
    }
    
    deleteRecipe(index : number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}