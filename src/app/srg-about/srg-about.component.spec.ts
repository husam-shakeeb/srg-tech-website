import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrgAboutComponent } from './srg-about.component';

describe('SrgAboutComponent', () => {
  let component: SrgAboutComponent;
  let fixture: ComponentFixture<SrgAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrgAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrgAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
