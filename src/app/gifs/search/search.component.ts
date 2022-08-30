import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  searchGif() {

    const value = this.inputSearch.nativeElement.value;
    this. gifsService.searchGifs(value);
    this.inputSearch.nativeElement.value = '';
  }
}
