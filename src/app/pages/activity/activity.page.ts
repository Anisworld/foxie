import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  btnCliked(){
    this.route.navigate(['/treatment']);
  }

}
