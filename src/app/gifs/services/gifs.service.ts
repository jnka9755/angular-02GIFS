import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  constructor() { }

  get history() {
    return [...this._history];
  }

  searchGifs( query: string) {
    this._history.unshift(query);
    console.log(this._history);
  }
}
