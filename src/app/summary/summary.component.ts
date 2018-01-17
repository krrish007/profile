import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  profileArr = [1, 2, 3, 4, 5, 6, 7];

  constructor() { console.log('In summary'); }

  ngOnInit() {
  }

}
