import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincenterComponent } from './maincenter.component';

describe('MaincenterComponent', () => {
  let component: MaincenterComponent;
  let fixture: ComponentFixture<MaincenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
