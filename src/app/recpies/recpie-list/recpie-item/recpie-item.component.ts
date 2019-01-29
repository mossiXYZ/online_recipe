import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recpie } from 'src/app/shared/models/recpie.model';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  @Input() recipe : Recpie ;
  @Output() itemToList : EventEmitter<Recpie> = new EventEmitter<Recpie>();
  constructor() { }

  ngOnInit() {
  }

  onClickRecipe(){
    // console.log(this.recipe)
    this.itemToList.emit(this.recipe);
  }

}
