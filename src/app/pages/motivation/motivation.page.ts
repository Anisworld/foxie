import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.page.html',
  styleUrls: ['./motivation.page.scss'],
})
export class MotivationPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  backbtn(){
    this.route.navigate(['/treatment'])
  }

}
