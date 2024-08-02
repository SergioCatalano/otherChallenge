import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebasjs',
  templateUrl: './pruebasjs.component.html',
  styleUrls: ['./pruebasjs.component.css']
})
export class PruebasjsComponent implements OnInit {

  

  constructor() { 
    
  }

  

  ngOnInit(): void {

    const ovejas = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo'},
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo'}
    ]
    // SOLUCION 1 = MIA 
    //
    //const filtroA = ovejas.filter(oveja=> oveja.name.toLowerCase().includes('n'));
    //const filtroAN = filtroA.filter(oveja=> oveja.name.toLowerCase().includes('a'))
    //const filtroTotal = filtroAN.filter(x => x.color=='rojo');
    //console.log(filtroTotal)

    const letter = "bici (s) coche (balón) bici coche"
    //const newletter = letter.split('')
    //console.log(newletter);

    
     function isValid(letter: string) {
      
      let prohibidos = ["[", "{", ']', '}']
      let characters = letter.split('')  
     
      let openParentesis =0
      let closeParentesis =0
      let charprohibido =0
      let valor = false
      
      characters.map( character => {
        if (prohibidos.includes(character)) {
          charprohibido++
        }

        if (character === '(')  {
          openParentesis++
          
        } else if (character === ')')  {
          closeParentesis++    
        }
             
      })
      let pos = characters.indexOf('(')+1 
      //console.log(pos);
      if ((characters[pos]!=')') && characters[pos]!='(')  
        valor = true
      
      if(openParentesis === closeParentesis) {
        return true
      } else { false }

      return (valor &&((openParentesis==closeParentesis)&&charprohibido==0))
     }
     const isValidLetter= isValid(letter)
     //console.log(isValidLetter)

     
     
    
  }
}
