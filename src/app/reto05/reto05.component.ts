import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto05',
  templateUrl: './reto05.component.html',
  styleUrls: ['./reto05.component.css']
})
export class Reto05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {


    console.log('Welcome to AdventJs Challenge 05');

    const dayMS = 24*60*60*1000

    function daysToXmas(date: Date) {

      const xChristmas = Date.parse('Dec 25, 2021')
      const compareDate = date.getTime()
      const diff = compareDate - xChristmas
      const days = Math.floor(diff / dayMS)

      console.log(compareDate);
      console.log(xChristmas);
      
      console.log(days);
      
      
      
      return days
    }
    daysToXmas(new Date())
    
    
    
    
    
    

  }

}
