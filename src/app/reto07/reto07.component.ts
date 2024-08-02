import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto07',
  templateUrl: './reto07.component.html',
  styleUrls: ['./reto07.component.css']
})
export class Reto07Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ADVENTJS Reto07');
    
    var almacen = {
      'estanteria1': {
        'cajon1': {
          'producto1': 'coca-cola',
          'producto2': 'fanta',
          'producto3': 'sprite'
        }
      },
      'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
          'producto1': 'pantalones',
          'producto2': 'camiseta' // <- ¡Está aquí!
        }
      }
    }
    
    
    function contains(store:any, product:string): boolean {
      
      for (var item in store) {
        const child = store[item]
        let find = false

        if (typeof child === 'object') {
          find = contains(child, product)
        }
        else if (child === product)  return true 

        if (find) return find
      }


      return false
    }

    console.log(contains(almacen, 'pepe'));


    const otroAlmacen = {
      'baul': {
        'fondo': {
          'objeto': 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando'
        }
      }
    }
      
    console.log(contains(otroAlmacen, 'gameboy'));
     // false
     // true


    // function iterateStore(store:any) {
    //   if (typeof(store)==='string') {
    //     return store
    //   } else {
    //     return Object.values(store).map
    //   }
    // }

    // function contains(store:any, product:string) {
    //   const stock = iterateStore(store)
    //   console.log(store)
     
    //   return false
    // }

    // console.log(contains(almacen,'camiseta'));
    
    
    




    // console.log(typeof (almacen));
    // if (typeof(almacen) === 'object') {
    //   const arrayChild = Object.getOwnPropertyNames(almacen)
    //   console.log(arrayChild);
 
    // }
    // if (typeof(almacen)==='string') {
    //   console.log('es un string');
      
    // }

    //console.log("ALMACEN  KEYS, GETOWNPROP, VALUES");
    
    // console.log(Object.keys(almacen));
    // console.log(Object.getOwnPropertyNames(almacen));
    // console.log(Object.values(almacen));

    // console.log("ESTANTERIA 1");
    
    // console.log(typeof (almacen.estanteria1));
    // console.log(typeof (almacen.estanteria1.cajon1));
    // console.log(typeof (almacen.estanteria1.cajon1.producto1));

    // console.log("ESTANTERIA 2");
    // console.log(typeof (almacen.estanteria2));
    // console.log(typeof (almacen.estanteria2.cajon1));
    // console.log(typeof (almacen.estanteria2.cajon2));
    // console.log(typeof (almacen.estanteria2.cajon2.producto1));
    
    // console.log('typeof: ',typeof null);
    

    //console.log(Object.keys(almacen.estanteria1));
    //console.log(Object.keys(almacen.estanteria2)); 
   
    // console.log("ALMACEN.ESTANTERIA2.CAJON 1 Y 2  KEYS");
    // console.log(Object.keys(almacen.estanteria2.cajon1));
    // console.log(Object.keys(almacen.estanteria2.cajon2));
       
    // console.log("GETOWNPROP");
    // console.log(Object.getOwnPropertyNames(almacen.estanteria2.cajon1));
    // console.log(Object.getOwnPropertyNames(almacen.estanteria2.cajon2));
    // console.log("VALUES");
    // console.log(Object.values(almacen.estanteria2.cajon1));
    // console.log(Object.values(almacen.estanteria2.cajon2));
    
  }

}
