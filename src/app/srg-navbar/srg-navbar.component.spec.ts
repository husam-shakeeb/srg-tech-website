import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrgNavbarComponent } from './srg-navbar.component';

describe('SrgNavbarComponent', () => {
  let component: SrgNavbarComponent;
  let fixture: ComponentFixture<SrgNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrgNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
