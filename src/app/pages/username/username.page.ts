import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsernamePageForm } from './username.page.form';

@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {

  form: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new UsernamePageForm(this.formBuilder).createForm();
  }

  btnCliked(){
    this.route.navigate(['/goals']);

  }

}
