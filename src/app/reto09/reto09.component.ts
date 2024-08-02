import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto09',
  templateUrl: './reto09.component.html',
  styleUrls: ['./reto09.component.css']
})
export class Reto09Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    



    // groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
    // groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
    // groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

    // groupBy(
    //   [1397639141184, 1363223700000],
    //   timestamp => new Date(timestamp).getFullYear())

    // { 2013: [1363223700000], 2014: [1397639141184] }

    // groupBy([
    //   { title: 'JavaScript: The Good Parts', rating: 8 },
    //   { title: 'Aprendiendo Git', rating: 10 },
    //   { title: 'Clean Code', rating: 9 },
    // ], 'rating')

    // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
    //   9: [{ title: 'Clean Code', rating: 9 }],
    //   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

    // function groupBy(collection: any[], it:any) {
    //   const filter = []
    //   for (let i = 0; i < collection.length; i++) {
    //     filter.push(collection[i].it)
    //     console.log(collection[i].it);
        
    //   }
      
    //   return filter
    // }

    // function groupBy(collection: any[], it:any) {
    //   var list = {}

    //   collection.forEach(item => {
    //     let key = (typeof it === "function") ? it(item) : item[it];
    //     list[key] = [...(list[ley] || [], item)]
    //   })

    //   return list
    // }

    // function groupBy(collection: any[], it:any) {
    //   const obj = {}
    //   const isFunction = typeof it === 'function'

    //   for (const value of collection) {
    //     const key = isFunction
    //         ? it(value)
    //         : value[it]

    //     obj[key] ??= []
    //     obj[key].push(value)

        // key in obj
        //   ? obj[key].push(value)
        //   : (obj[key] = [value])
        

    //   }

    //   return obj
    // }

    //console.log(groupBy([6.1, 4.2, 6.3], Math.floor));

     
     



  }

}
