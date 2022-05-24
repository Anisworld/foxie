import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotivationPage } from './motivation.page';

describe('MotivationPage', () => {
  let component: MotivationPage;
  let fixture: ComponentFixture<MotivationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotivationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
