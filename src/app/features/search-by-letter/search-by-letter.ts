import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../shared/navbar/navbar';
import { MealService } from '../../core/services/meal';
import { Meal } from '../../core/models/meal';

@Component({
  selector: 'app-search-by-letter',
  standalone: true,
  imports: [
    CommonModule,
    Navbar
  ],
  templateUrl: './search-by-letter.html',
  styleUrl: './search-by-letter.css'
})
export class SearchByLetter {

  letters: string[] = Array.from(
    { length: 26 },
    (_, index) => String.fromCharCode(65 + index)
  );

  selectedLetter: string = '';
  meals: Meal[] = [];
  loading: boolean = false;

  constructor(private mealService: MealService) {}

  selectLetter(letter: string): void {

    this.selectedLetter = letter;
    this.loading = true;

    console.log('Letra seleccionada:', letter);

    this.mealService.searchByLetter(letter).subscribe({

      next: (meals: Meal[]) => {

        console.log('Platos recibidos:', meals);
        console.log('Cantidad de platos:', meals.length);

        this.meals = meals || [];
        this.loading = false;

      },

      error: (error) => {

        console.error('Error al buscar platos:', error);

        this.meals = [];
        this.loading = false;

      }

    });

  }

  trackByMeal(index: number, meal: Meal): string {
    return meal.idMeal;
  }

}
