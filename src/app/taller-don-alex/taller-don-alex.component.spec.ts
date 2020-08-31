import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerDonAlexComponent } from './taller-don-alex.component';

describe('TallerDonAlexComponent', () => {
  let component: TallerDonAlexComponent;
  let fixture: ComponentFixture<TallerDonAlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallerDonAlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerDonAlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
