import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    { id: 1, name: 'BEEF BROCCOLI', ingredients: ['Beef', 'Broccoli', 'Cornstarch', 'Sauce and oil', 'Garlic','Ginger'], imageUrl: 'assets/img/beefbroco.jpg' },
    { id: 2, name: 'FISH FILLET', ingredients: ['Paprika', 'Salt', 'Creamy Dory', 'Vegetable oil'], imageUrl: 'assets/img/fishfillet.jpg' },
    { id: 3, name: 'BONELESS LECHON CEBU', ingredients: ['Garlic', 'Lemongrass', 'White Vinegar', 'Anise', 'Pork Belly', 'Salt'], imageUrl: 'assets/img/lechon.jpg' },
    { id: 4, name: 'ROAST BEEF', ingredients: ['Beef', 'Olive oil', 'Fresh herbs', 'Butter', 'Red wine'], imageUrl: 'assets/img/roastbeef.jpeg' },
    { id: 5, name: 'CHICKEN TERIYAKI', ingredients: ['Chicken', 'Soy Sauce', 'Brown Sugar', 'Cooking oil'], imageUrl: 'assets/img/chickenteriyaki.jpeg' }
  ];

  getRecipes() {
    return this.recipes;
  }
}
