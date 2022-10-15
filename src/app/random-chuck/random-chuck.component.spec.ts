import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChuckComponent } from './random-chuck.component';

describe('RandomChuckComponent', () => {
  let component: RandomChuckComponent;
  let fixture: ComponentFixture<RandomChuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChuckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomChuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
