import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciseDetailsPage } from './exercise-details.page';

describe('ExerciseDetailsPage', () => {
  let component: ExerciseDetailsPage;
  let fixture: ComponentFixture<ExerciseDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
