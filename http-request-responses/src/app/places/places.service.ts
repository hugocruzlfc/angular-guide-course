import { inject, Injectable, signal } from '@angular/core';

import { GetPlacesResponse, Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, pipe, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

const API_BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private htpClient = inject(HttpClient);
  private errorService = inject(ErrorService);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      `${API_BASE_URL}/places`,
      'Something went wrong fetching the available places. Please try again',
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      `${API_BASE_URL}/user-places`,
      'Something went wrong fetching your favorite places. Please try again',
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      }),
    );
  }

  addPlaceToUserPlaces(place: Place) {
    //this.userPlaces.update((prevPlaces) => [...prevPlaces, place]);
    const prevPlaces = this.userPlaces();

    if (prevPlaces.some((p) => p.id === place.id)) {
      return;
    }

    this.userPlaces.set([...prevPlaces, place]);

    return this.htpClient
      .put(`${API_BASE_URL}/user-places`, {
        placeId: place.id,
      })
      .pipe(
        catchError((error) => {
          this.userPlaces.set(prevPlaces);
          this.errorService.showError('Failed to store selected place.');
          return throwError(() => new Error('Failed to store selected place.'));
        }),
      );
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return this.htpClient.get<GetPlacesResponse>(url).pipe(
      map((resData) => resData.places),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      }),
    );
  }
}
