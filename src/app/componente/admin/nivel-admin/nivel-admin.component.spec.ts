import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelAdminComponent } from './nivel-admin.component';

describe('NivelAdminComponent', () => {
  let component: NivelAdminComponent;
  let fixture: ComponentFixture<NivelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
