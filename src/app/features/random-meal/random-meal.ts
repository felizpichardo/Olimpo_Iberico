import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealService } from '../../core/services/meal';
import { Meal } from '../../core/models/meal';

@Component({
  selector: 'app-random-meal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-meal.html',
  styleUrl: './random-meal.css'
})
export class RandomMeal {

  meal: Meal | null = null;
  loading: boolean = false;

  constructor(private mealService: MealService) {}

  getRandomMeal(): void {

    this.loading = true;
    this.meal = null;

    this.mealService.getRandomMeal()
      .subscribe({
        next: (data) => {
          this.meal = data;
          this.loading = false;
        },
        error: () => {
          this.meal = null;
          this.loading = false;
        }
      });

  }
}
