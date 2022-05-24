import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  btnCliked(){
    this.route.navigate(['/home']);
  }

}
