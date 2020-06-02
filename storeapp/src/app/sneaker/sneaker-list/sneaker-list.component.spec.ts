import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerListComponent } from './sneaker-list.component';

describe('SneakerListComponent', () => {
  let component: SneakerListComponent;
  let fixture: ComponentFixture<SneakerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
