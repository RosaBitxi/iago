import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceiraComponent } from './cabeceira.component';

describe('CabeceiraComponent', () => {
  let component: CabeceiraComponent;
  let fixture: ComponentFixture<CabeceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
