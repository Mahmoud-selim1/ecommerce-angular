import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductComponent } from './sub-product.component';

describe('SubProductComponent', () => {
  let component: SubProductComponent;
  let fixture: ComponentFixture<SubProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubProductComponent]
    });
    fixture = TestBed.createComponent(SubProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
