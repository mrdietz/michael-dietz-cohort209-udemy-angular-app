import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe1', 'This is a description of recipe1.', 'https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg'),
    new Recipe('Test Recipe2', 'This is a description of recipe2.', 'https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
