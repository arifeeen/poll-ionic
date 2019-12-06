import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePollPage } from './create-poll.page';

describe('CreatePollPage', () => {
  let component: CreatePollPage;
  let fixture: ComponentFixture<CreatePollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
