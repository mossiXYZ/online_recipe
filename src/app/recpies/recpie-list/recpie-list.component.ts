import { Component, OnInit } from '@angular/core';
import { Recpie } from '../../shared/models/recpie.model';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {

  recpies : Recpie[] =[
    new Recpie('دستور پخت ماکارونی',
    'توضیحات برای پخت ماکارونی مامانپذ',
    'https://thestayathomechef.com/wp-content/uploads/2017/12/Pasta-Pomodoro-4-small.jpg'),
    new Recpie('دستور پخت قرمه سبزی',
    'توضیحات برای پخت قرمه سبزی مامانپذ',
    'https://www.2nafare.com/wp-content/uploads/2015/01/%D9%82%D9%88%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C-%D8%AC%D8%A7-%D8%A7%D9%81%D8%AA%D8%A7%D8%AF%D9%87.jpg'),
    new Recpie('دستور پخت قیمه بادمجون',
    'توضیحات برای پخت قیمه بادمجون مامانپذ',
    'http://www.beytoote.com/images/stories/food/fo3897.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
