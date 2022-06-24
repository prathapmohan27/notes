import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bin-card',
  templateUrl: './bin-card.component.html',
  styleUrls: ['./bin-card.component.scss']
})
export class BinCardComponent implements OnInit {

  @Input() binNotes:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  restore(obj:any){
    this.binNotes.splice(this.binNotes.indexOf(obj),1);
    this.dataService.restore(obj);
  }
}
