import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedbacklist } from './feedbacklist';

describe('Feedbacklist', () => {
  let component: Feedbacklist;
  let fixture: ComponentFixture<Feedbacklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Feedbacklist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feedbacklist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
