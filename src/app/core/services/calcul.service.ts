import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getBilan(list:any[], critiria:string, value:any){
    let count=0;
    for(let i in list){
      if (list[i][critiria] === value){
        count++
      }
    }
    return count;
  }

}
