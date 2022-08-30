import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentoComponent } from './monumento.component';

describe('MonumentoComponent', () => {
  let component: MonumentoComponent;
  let fixture: ComponentFixture<MonumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
