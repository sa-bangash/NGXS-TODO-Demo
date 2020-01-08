import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  getList() {
    return [
      {
        id: 1,
        text: 'debuging',
        done: false,
      },
      {
        id: 2,
        text: 'coding Time',
        done: false,
      }
    ]
  }
}