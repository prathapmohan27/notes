import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

// interface noteInterface{
//   tittle:string,
//   date:string,
//   description:string
// }

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss']
})
export class NotesFormComponent implements OnInit {

 notes:any=[];
 index:number=0;
 isEdit:boolean=true;
  constructor(private dataService:DataService) { }

  notesForm = new FormGroup({
    tittle: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.notes.push(...this.dataService.getHomeData())
  }

  onSubmit(){
    if(this.isEdit){
      this.notes.push(this.notesForm.value)
      this.dataService.storeHomeData(this.notes);
    }else{
      this.notes[this.index]=this.notesForm.value;
      this.dataService.storeHomeData(this.notes);
      this.isEdit=true;
    }
    this.notesForm.reset();  
  }

  receiveObj($event:any){
    let obj=$event;
    this.index=this.notes.indexOf(obj);
    this.isEdit=false;
    this.notesForm.setValue(obj);
  }

}
