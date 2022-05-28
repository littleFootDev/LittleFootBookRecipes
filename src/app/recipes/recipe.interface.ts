import { IIngredient } from "../shared/ingredient.interface";

export interface IRecipe {
     name: string;
     description: string;
     imagePath: string;
     ingredients: IIngredient[]
}