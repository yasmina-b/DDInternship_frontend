import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantTableComponent } from './variant-table.component';

describe('VariantTableComponent', () => {
  let component: VariantTableComponent;
  let fixture: ComponentFixture<VariantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
