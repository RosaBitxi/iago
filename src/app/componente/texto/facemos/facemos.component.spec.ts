import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacemosComponent } from './facemos.component';

describe('FacemosComponent', () => {
  let component: FacemosComponent;
  let fixture: ComponentFixture<FacemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
