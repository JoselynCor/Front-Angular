import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRentaComponent } from './home-renta.component';

describe('HomeRentaComponent', () => {
  let component: HomeRentaComponent;
  let fixture: ComponentFixture<HomeRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
