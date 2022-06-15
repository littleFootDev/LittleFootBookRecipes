import { Action } from "@ngrx/store"

import { IIngredient } from "src/app/shared/ingredient.interface";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    constructor(public payload?: IIngredient) {}
}

