import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moodpopover',
  templateUrl: './moodpopover.page.html',
  styleUrls: ['./moodpopover.page.scss'],
})
export class MoodpopoverPage implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }
  firstRecommend(){
    this.routes.navigate(['/activity']);
  }

}
