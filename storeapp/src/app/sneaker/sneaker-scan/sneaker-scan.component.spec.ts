import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerScanComponent } from './sneaker-scan.component';

describe('SneakerScanComponent', () => {
  let component: SneakerScanComponent;
  let fixture: ComponentFixture<SneakerScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
