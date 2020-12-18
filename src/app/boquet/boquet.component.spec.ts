import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquetComponent } from './boquet.component';

describe('BoquetComponent', () => {
  let component: BoquetComponent;
  let fixture: ComponentFixture<BoquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoquetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
