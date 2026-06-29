import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealService } from '../../core/services/meal';
import { Meal } from '../../core/models/meal';

@Component({
  selector: 'app-search-by-name',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-by-name.html',
  styleUrl: './search-by-name.css'
})
export class SearchByName {

  searchTerm: string = '';
  meals: Meal[] = [];

  constructor(private mealService: MealService) {}

  search(): void {

    if (!this.searchTerm.trim()) {
      this.meals = [];
      return;
    }

    this.mealService.searchByName(this.searchTerm)
      .subscribe({
        next: (data) => {
          this.meals = data;
        },
        error: () => {
          this.meals = [];
        }
      });

  }
}
