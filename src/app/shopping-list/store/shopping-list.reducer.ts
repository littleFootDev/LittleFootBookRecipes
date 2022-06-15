import { Action } from "@ngrx/store"
import { IIngredient } from "src/app/shared/ingredient.interface";

import * as ShoppingListAction  from './shopping-list.action';

const initialState = {
    ingredients: [
        {
          name: 'Apple',
          amount: 5
        },
        {
          name: 'Tomato',
          amount: 10
        }
    ]
}

export function shoppingListReducer(
    state : any = initialState,
    action: ShoppingListAction.AddIngredient | any
  ) {
    switch (action.type) {
      case ShoppingListAction.ADD_INGREDIENT:
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload]
        };
      default:
        return state;
    }
  }