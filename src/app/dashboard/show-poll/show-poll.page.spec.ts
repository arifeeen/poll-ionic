import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowPollPage } from './show-poll.page';

describe('ShowPollPage', () => {
  let component: ShowPollPage;
  let fixture: ComponentFixture<ShowPollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowPollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
