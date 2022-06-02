import { Component, Input, OnInit} from '@angular/core';
import { IRecipe } from '../../recipe.interface';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: IRecipe;
  @Input() index!: number;
  

  ngOnInit(): void {
  }
  
}
