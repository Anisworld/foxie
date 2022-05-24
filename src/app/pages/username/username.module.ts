import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsernamePageRoutingModule } from './username-routing.module';
import { UsernamePage } from './username.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsernamePageRoutingModule,
    ReactiveFormsModule,
    AngularFireModule,
    AppRoutingModule
  ],
  declarations: [UsernamePage]
})
export class UsernamePageModule {}
