import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSalesComponent } from './stock-sales.component';

describe('StockSalesComponent', () => {
  let component: StockSalesComponent;
  let fixture: ComponentFixture<StockSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
