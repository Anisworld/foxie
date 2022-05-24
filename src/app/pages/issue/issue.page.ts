import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.page.html',
  styleUrls: ['./issue.page.scss'],
})
export class IssuePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  clicked1(){
    this.route.navigate(['/treatment']);
  }
  onclicked(){
    this.route.navigate(['/home']);
  }
  issueclicked(){
    this.route.navigate(['/issue']);
  }
  homeclicked(){
    this.route.navigate(['/home']);
  }
  treatmentclicked(){
    this.route.navigate(['/treatment']);
  }

}
