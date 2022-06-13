import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { IRecipe } from "../recipes/recipe.interface";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap, take, exhaustMap} from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authservice: AuthService
    ){};


    storeRecipes() {

        const recipes = this.recipeService.getRecipes();

        this.http.post('https://littlefootbookrecipes-88ef8-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(response => {
        
        });
    }

    fetchRecipes() {
        
        return this.http
        .get<IRecipe[]>(
            'https://littlefootbookrecipes-88ef8-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
        )
        .pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe, 
                        ingredients : recipe.ingredients ? recipe.ingredients : []
                    };
                });
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
            
        
    }
        
        
        
        
            
}
