import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto04',
  templateUrl: './reto04.component.html',
  styleUrls: ['./reto04.component.css']
})
export class Reto04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {


  // function getRandomIntInclusive(min:number, max:number) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  // const height = getRandomIntInclusive(1,100);

  // console.log(getRandomIntInclusive(1,100));
  // console.log(height);
  

  // function createObject(height: number) {
  //   // ¡Y no olvides también poner los turrones!
  //   let txt = 'le queda mecha'
  //   if (height >= 50) {
  //     txt = 'casi estira la pata'  
  //   }
  //   return {
  //     name: 'adam',
  //     age: height,
  //     description: txt,
  //   }
  // }
  // console.log(createObject(height));
  
  function createXmasTree( height: number) {
    let star =''
    let trunk = ''

    for (let iterator = 0; iterator < height; iterator++) {
        
      for (let space = 1; space < (height - iterator); space++) {
        if (iterator === 0) { trunk += "_" }
        star += "_"
      }

      for (let symbol = 0; symbol <= iterator; symbol++) {
        if (iterator === 0) { trunk += "#" }
        if (symbol===0) {
          star += '*'
        } else {
          star += '**'
      }}

      for (let space = 1; space < (height - iterator); space++) {
        if (iterator === 0) { trunk += "_" }
        star += '_'
      }

      star += "\n"
    }
    star += trunk +"\n"
    
    star += trunk
   
    return star
  }

  console.log(createXmasTree(5)) 
  }
}
