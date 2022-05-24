import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popover-component',
  templateUrl: './popover-component.page.html',
  styleUrls: ['./popover-component.page.scss'],
})
export class PopoverComponentPage implements OnInit {

  constructor(public popoverController: PopoverController, private routes: Router) { }

  ngOnInit() {
  }
  add(){
    this.routes.navigate(['/goals']),
    this.popoverController.dismiss();
  }
  logout(){
    this.routes.navigate(['/username']),
    this.popoverController.dismiss();
  }
  close(){
    this.popoverController.dismiss();
  }
  
}
