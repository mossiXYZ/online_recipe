import { Component, OnInit, Input } from '@angular/core';
import { Recpie } from 'src/app/shared/models/recpie.model';

@Component({
  selector: 'app-recpie-detail',
  templateUrl: './recpie-detail.component.html',
  styleUrls: ['./recpie-detail.component.css']
})
export class RecpieDetailComponent implements OnInit {

  @Input() recipe:Recpie;

  constructor() {     console.log(this.recipe);
  }

  ngOnInit() {
  }

}
