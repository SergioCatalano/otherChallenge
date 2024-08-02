import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  array = [
    { name: 'Bebidas', id: 1},
    { name: 'Comidas', id: 2},
    { name: 'Limpieza', id: 3}
];

  constructor() { }
}
