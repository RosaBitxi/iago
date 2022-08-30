import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedepaxinaComponent } from './pedepaxina.component';

describe('PedepaxinaComponent', () => {
  let component: PedepaxinaComponent;
  let fixture: ComponentFixture<PedepaxinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedepaxinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedepaxinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
