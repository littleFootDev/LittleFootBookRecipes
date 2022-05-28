import { Component, Input, OnInit} from '@angular/core';
import { IRecipe } from '../../recipe.interface';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: IRecipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  onSelected(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
