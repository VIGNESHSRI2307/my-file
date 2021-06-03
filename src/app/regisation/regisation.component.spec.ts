import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisationComponent } from './regisation.component';

describe('RegisationComponent', () => {
  let component: RegisationComponent;
  let fixture: ComponentFixture<RegisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
