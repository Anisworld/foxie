import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.page.html',
  styleUrls: ['./treatment.page.scss'],
})
export class TreatmentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  btnExercise(){
    this.route.navigate(['/exercise']);
  }
  btnActivity(){
    this.route.navigate(['/activity']);
  }
  btnMotivation(){
    this.route.navigate(['/motivation']);
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
