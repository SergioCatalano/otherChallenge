import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto11',
  templateUrl: './reto11.component.html',
  styleUrls: ['./reto11.component.css']
})
export class Reto11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {


    function shouldBuyFidelity(times:number) {

      let equ = 12
      let normal = 12 * times  
      let fidelity = 250;
      for (let i = 0; i < times; i++) {
        equ = equ  * 0.75
        console.log(equ);
        fidelity += equ;
        console.log(fidelity);
        
        
      }
      if (normal > fidelity) {
        return true
      } else return false
     
    }

    console.log(shouldBuyFidelity(10));
    
  }

}
