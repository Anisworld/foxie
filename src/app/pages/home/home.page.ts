import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MoodpopoverPage } from '../moodpopover/moodpopover.page';
import { PopoverComponentPage } from '../popover-component/popover-component.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  myToast: any;
  constructor(private route: Router, public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async popclcick(event){
    const popover = await this.popoverController.create({
      component: PopoverComponentPage,
      event 
    });
    return await popover.present();
  }
  async smilepop(event){
    const popover = await this.popoverController.create({
      component: MoodpopoverPage,
      event 
    });
    return await popover.present();
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
