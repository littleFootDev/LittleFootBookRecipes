import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe! : IRecipe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
