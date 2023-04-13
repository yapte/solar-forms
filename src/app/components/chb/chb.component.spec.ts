import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChbComponent } from './chb.component';

describe('ChbComponent', () => {
  let component: ChbComponent;
  let fixture: ComponentFixture<ChbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
