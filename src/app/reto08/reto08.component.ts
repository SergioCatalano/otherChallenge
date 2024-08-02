import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto08',
  templateUrl: './reto08.component.html',
  styleUrls: ['./reto08.component.css']
})
export class Reto08Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
    //maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

    const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
    //maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
    
    const pricesDoge = [18, 15, 12, 11, 9, 7]
    //maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

    const pricesAda = [3, 3, 3, 3, 3]
    //maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
    
    //[6, 5, 4, 3] no tiene ganancias...

    function maxProfit(prices: number[]) {
     
      // console.log('[0] - [1]', prices[0]-prices[1]);
      // console.log('[0] - [1]', (prices[0]-prices[1])>0);

      // console.log('[1] - [0]',prices[1]-prices[0]);
      // console.log('[1] - [0]',(prices[1]-prices[0])>0);
      // console.log(-30 < -10);
      let profit = -1
      for (let i = 0; i < prices.length-1; i++) {
        
        for (let j= i+1; j < prices.length; j++) {

          if ((prices[j]- prices [i] > profit) &&(prices[j]- prices [i]>0) ) {
            profit = prices[j]- prices [i]
          }

        }
      }
     return profit
    }

    console.log(maxProfit(pricesAda));
    
   
      let timestamp = 1363223700000
      console.log(new Date(timestamp).getFullYear());
      
    

  }

}
