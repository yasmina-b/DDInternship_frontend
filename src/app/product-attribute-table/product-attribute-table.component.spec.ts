import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAttributeTableComponent } from './product-attribute-table.component';

describe('ProductAttributeTableComponent', () => {
  let component: ProductAttributeTableComponent;
  let fixture: ComponentFixture<ProductAttributeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAttributeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAttributeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
