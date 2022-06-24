import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() notes:any;
  @Output() editEvent=new EventEmitter()
  constructor(private dataService:DataService) { }

  bin:any=[];
  ngOnInit(): void {
  }

  remove(obj:any){
    let value=this.notes.splice(this.notes.indexOf(obj),1);
    this.bin.push(value[0]);
    this.dataService.storeBinData(this.bin);
    this.dataService.storeHomeData(this.notes);
  }

  sendObj(obj:any){
    this.editEvent.emit(obj);
  }
}
