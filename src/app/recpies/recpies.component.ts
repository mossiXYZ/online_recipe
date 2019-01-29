import { Component, OnInit } from '@angular/core';
import { Recpie } from '../shared/models/recpie.model';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css']
})
export class RecpiesComponent implements OnInit {

  recipe: Recpie;
  constructor() { }

  ngOnInit() {
  }


  onRecipeSelected(event){

    this.recipe = event;
  }
}
