import { inject, Injectable, signal } from '@angular/core';

import { GetPlacesResponse, Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

const API_BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private htpClient = inject(HttpClient);
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
    this.userPlaces.update((prevPlaces) => [...prevPlaces, place]);
    return this.htpClient.put(`${API_BASE_URL}/user-places`, {
      placeId: place.id,
    });
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
