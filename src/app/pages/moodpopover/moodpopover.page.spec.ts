import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoodpopoverPage } from './moodpopover.page';

describe('MoodpopoverPage', () => {
  let component: MoodpopoverPage;
  let fixture: ComponentFixture<MoodpopoverPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodpopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoodpopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
