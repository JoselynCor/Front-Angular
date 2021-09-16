import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloComponent } from './capituloS1.component';

describe('CapituloComponent', () => {
  let component: CapituloComponent;
  let fixture: ComponentFixture<CapituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
