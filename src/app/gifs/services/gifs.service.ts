import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'F95l4X4x90wF77FLnC9D02xD3CvOkpt3';
  private _history: string[] = [];

  public results: any[] = [];

  constructor( private http: HttpClient) { }

  get history() {
    return [...this._history];
  }

  searchGifs( query: string) {
    
    query = query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=F95l4X4x90wF77FLnC9D02xD3CvOkpt3&q=${query}&limit=10`)
      .subscribe( (response: any) => {
        this.results = response.data;
      });
  }
}

