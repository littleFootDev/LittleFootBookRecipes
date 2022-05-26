import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.interface';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : IRecipe[]= [
    {
      name: 'A test recipe', 
      description: 'is juste a test recipe',
      imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoPlbMzsGPrBgebjJI8tbnS1wMEx0yADG-w&usqp=CAU'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
