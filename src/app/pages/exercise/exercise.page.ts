import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  btnCliked(){
    this.route.navigate(['/treatment']);
  }
  btnExercise1(){
    this.route.navigate(['/exercise-details'])
  }

}
