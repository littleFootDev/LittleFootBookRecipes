import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store'

import { IIngredient } from '../shared/ingredient.interface';
import { SoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients?: Observable<{ingredients: IIngredient[]}> ;
  //private igChangedSub! : Subscription;
  

  constructor(
    private slService : SoppingListService,
    private store : Store<{shoppingList: {ingredients: IIngredient[]}}>
  ) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.igChangedSub = this.slService.ingredientChanged
    //   .subscribe(
    //    (ingredients: IIngredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }
  ngOnDestroy(): void {
    
    // this.igChangedSub.unsubscribe();
  }
  

  public onEditItem(index: number): void {
    this.slService.startedEditing.next(index);
  }
}


