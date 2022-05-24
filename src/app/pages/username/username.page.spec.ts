import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UsernamePage } from './username.page';

describe('UsernamePage', () => {
  let component: UsernamePage;
  let fixture: ComponentFixture<UsernamePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernamePage ],
      imports: [IonicModule.forRoot(),
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsernamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create form on init', () =>{
  //   component.ngOnInit();

  //   expect(component.form).not.toBeUndefined();
  // })

});
