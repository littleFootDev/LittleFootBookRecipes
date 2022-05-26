import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.interface';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe!: IRecipe;
  constructor() { }

  ngOnInit(): void {
  }

}
