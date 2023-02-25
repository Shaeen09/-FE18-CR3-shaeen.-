import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecialComponent } from './home-special.component';

describe('HomeSpecialComponent', () => {
  let component: HomeSpecialComponent;
  let fixture: ComponentFixture<HomeSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
