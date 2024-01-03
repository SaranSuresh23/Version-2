import { EventEmitter,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mydata=new EventEmitter<string>();
  constructor() { }
  dataemit(data:string){
    this.mydata.emit(data);
}
}
