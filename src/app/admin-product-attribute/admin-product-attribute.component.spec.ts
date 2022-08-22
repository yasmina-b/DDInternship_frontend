import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductAttributeComponent } from './admin-product-attribute.component';

describe('AdminProductAttributeComponent', () => {
  let component: AdminProductAttributeComponent;
  let fixture: ComponentFixture<AdminProductAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
