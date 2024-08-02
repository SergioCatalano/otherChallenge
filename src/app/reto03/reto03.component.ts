import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto03',
  templateUrl: './reto03.component.html',
  styleUrls: ['./reto03.component.css']
})
export class Reto03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  // SOLUCION 1 = EXPRESIONES REGULARES    NO OK
  //
  //   isValid(letter: string){
  //     if(letter.match(/(\(([a-zA-Z1-9áéíóúÁÉÍÓÚñÑ]{3,})\))/g) != null) return true
  //     return false;
  // }

  // SOLUCION 2 = OTRA SOL    OK 



  

  // var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // var expresion = /[A-E]/ugmi;   // gi
  // var array_emparejamientos = cadena.match(expresion);
  // console.log(array_emparejamientos);




    const letter = "(pelota)  {] () bici" // ❌

    const newletter = letter.split(' ')
    console.log(newletter);

    function isValid(letter: string) {
      let regex = /\(\p{Script=Latin}+\)|^\p{Script=Latin}+$/ugm
      let str = letter.trim().split(' ')
      let letterFinal = str.every( x => {
          if(x.match(regex) !== null) {
          return true
          } else
          return false
          })
      return letterFinal
      }
  
    

    // function isValid(letter: string) {
    //   //let prohibidos = ["[", "{", ']', '}']
    //   let characters = letter.split('')  
    //   //console.log(characters);
    //   let openParentesis =0
    //   let closeParentesis =0

    //   characters.map( character => {

    //     if (character === '(')  {
    //       openParentesis++
    //     } else if (character === ')')  {
    //       closeParentesis++    
    //     }
    //   })

    //   if(openParentesis === closeParentesis 
    //       && closeParentesis>0 
    //       && openParentesis>0 
    //       && !letter.match(/[\[\[{}]/g)
    //       && !letter.match(/[(]\W+[)]|[(][)]/)
    //   ) {
    //     return true
    //   } else { 
    //     return false }
    // }

    const isValidLetter= isValid(letter)
    console.log(isValidLetter)
  }

}
