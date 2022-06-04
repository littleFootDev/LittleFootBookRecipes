import { Component, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IIngredient } from 'src/app/shared/ingredient.interface';
import { SoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm!: NgForm;

  private subscription!: Subscription
  public editMode: boolean = false;
  public editedItemIndex!: number;
  public editItem! : IIngredient;
  constructor(private slService : SoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name : this.editItem.name,
            amount: this.editItem.amount
          })
        }
      );
  }
  
  
  onSubmit(form :NgForm): void {
    const value = form.value
    const newIngredient: IIngredient = {
      name: value.name,
      amount: value.amount
    };

    if(this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient)
    }
    this.editMode = false
    form.reset();
  };

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  };

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClear
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


