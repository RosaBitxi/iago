import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNivelComponent } from './modify-nivel.component';

describe('ModifyNivelComponent', () => {
  let component: ModifyNivelComponent;
  let fixture: ComponentFixture<ModifyNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyNivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
