import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IIngredient } from '../shared/ingredient.interface';
import { SoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients!: IIngredient[];
  private igChangedSub! : Subscription;

  constructor(private slService : SoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangedSub = this.slService.ingredientChanged
      .subscribe(
       (ingredients: IIngredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  ngOnDestroy(): void {
    
    this.igChangedSub.unsubscribe();
  }
  onIngredientAdded(ingredient: any): void {
    this.ingredients.push(ingredient);
  }
}


