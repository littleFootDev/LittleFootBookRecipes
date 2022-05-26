import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from '../../recipe.interface';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: IRecipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelected(): void {
    this.recipeSelected.emit();
  }
}
