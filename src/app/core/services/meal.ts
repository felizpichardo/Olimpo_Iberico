import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private readonly API_URL = 'https://themealdb.com/api/json/v1/1';

  
  private letterCache: { [key: string]: Meal[] } = {};

  constructor(private http: HttpClient) {}

  searchByName(name: string): Observable<Meal[]> {

    return this.http
      .get<any>(`${this.API_URL}/search.php?s=${name}`)
      .pipe(

        map(res => res.meals ?? []),

        catchError(error => {
          console.error('ERROR Nombre', error);
          return of([]);
        })

      );

  }

  searchByLetter(letter: string): Observable<Meal[]> {

    const key = letter.toUpperCase();


    if (this.letterCache[key]) {
      return of(this.letterCache[key]);
    }

    return this.http
      .get<any>(`${this.API_URL}/search.php?f=${key}`)
      .pipe(

        map(res => {

          const meals = res.meals ?? [];


          this.letterCache[key] = meals;

          return meals;

        }),

        catchError(error => {

          console.error('ERROR Letra', error);

          return of([]);

        })

      );

  }

  getRandomMeal(): Observable<Meal | null> {

    return this.http
      .get<any>(`${this.API_URL}/random.php`)
      .pipe(

        map(res => res.meals ? res.meals[0] : null),

        catchError(error => {

          console.error('ERROR Random', error);

          return of(null);

        })

      );

  }

}
