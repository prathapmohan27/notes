import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  binNotes:any=[];
  notes:any=[];

  storeHomeData(notes:any){
    this.notes=notes;
  }

  getHomeData(){
    return this.notes;
  }
  

  storeBinData(data:any){
    data.forEach((obj: any) => {
      if(!this.binNotes.includes(obj)){
        this.binNotes.push(obj);
      }
    });
  }

  getBinData(){
    return this.binNotes;
  }

  clear(){
    this.binNotes=[];
  }

  restore(obj:any){
    this.notes.push(obj);
  }
  
}
