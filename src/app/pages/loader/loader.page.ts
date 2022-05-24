import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { OverlayBaseController } from '@ionic/angular/util/overlay';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  private loading;

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  loadclicked(){
    this.loadingCtrl.create({
      message:'Please wait...'
    }).then((Overlay)=>{
      this.loading = Overlay;
      this.loading.present();
    });
    
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.navigateRoot(['/username']);
    }, 2000);
  }

}
