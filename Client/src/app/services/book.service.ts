import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiurls } from '../api.urls';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  getBooks() {
    return this.http.get<Response<Book[]>>('http://localhost:3000/api/book');
  }
}

export type Book = {
  _id: string;
  title: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  __v: number;
};

export type Response<T> = {
  success: boolean;
  status: number;
  message: string;
  data: T;
};
