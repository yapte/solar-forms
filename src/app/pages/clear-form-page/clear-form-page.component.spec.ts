import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearFormPageComponent } from './clear-form-page.component';

describe('ClearFormPageComponent', () => {
  let component: ClearFormPageComponent;
  let fixture: ComponentFixture<ClearFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
