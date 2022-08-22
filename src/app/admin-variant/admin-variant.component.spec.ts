import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVariantComponent } from './admin-variant.component';

describe('AdminVariantComponent', () => {
  let component: AdminVariantComponent;
  let fixture: ComponentFixture<AdminVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVariantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
