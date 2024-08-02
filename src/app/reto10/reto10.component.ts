import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto10',
  templateUrl: './reto10.component.html',
  styleUrls: ['./reto10.component.css']
})
export class Reto10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    function getCoins(change: number) {
      const coins = [50,20,10,5,2,1]
      const resul = [0, 0, 0, 0, 0, 0]
      coins.map((coin, index) => {
        while (change - coin >=0) {
          change -= coin
          resul[index]+=1
        }
        


      })  

      return resul.reverse()
    }

    console.log(getCoins(51));
    

  }

}
