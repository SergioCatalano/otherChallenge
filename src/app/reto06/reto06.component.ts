import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto06',
  templateUrl: './reto06.component.html',
  styleUrls: ['./reto06.component.css']
})
export class Reto06Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

      //   [2, 2, 3, 1] y 4, debería ser [2, 2]

    function sumPairs(numbers : number[], result: number) {
     
      for (let i = 0; i < numbers.length-1; i++) {
        for (let j = i+1; j <= numbers.length-1; j++) {
          if (numbers[i]+numbers[j]===result) {
            return [numbers[i], numbers[j]]
            
          } 
        }
      
      }
     
   
      return null
    }

    console.log(sumPairs([2, 2, 3, 1], 3));
    
  }

}
