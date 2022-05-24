import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const circleR = 80;
const circleDasharray = 2* Math.PI * circleR;

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.page.html',
  styleUrls: ['./exercise-details.page.scss'],
})
export class ExerciseDetailsPage implements OnInit {

  time: BehaviorSubject<string> = new BehaviorSubject('00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  timer: number; //in seconds
  interval;

  startDuration = 1;

  circleR = circleR;
  circleDasharray =circleDasharray;

  state: 'start' | 'stop' = 'stop';


  constructor(private route: Router) { }

  iconCliked(){
    this.route.navigate(['/exercise']);
  }

  startTimer(duration: number){
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 30 ;
    this.interval = setInterval( () => {
      this.updateTimeValue();
    }, 1000);
  }

  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00');
    this.state = 'stop';
  }

  percentageOffset(percent){
    const percentFloat = percent /100;
    return circleDasharray * (1 - percentFloat);
  }

  updateTimeValue(){
     let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    // minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0'+ Math.floor(seconds)).slice(-2);

    const text = seconds;
    this.time.next(text);

    const totalTime = this.startDuration * 60;
    const percentage =((totalTime - this.timer)/ totalTime)* 100;
    this.percent.next(percentage);

    --this.timer;

    if(this.timer < 0){
      this.startTimer(this.startDuration);
    }
  }

  ngOnInit() {
  }

}
