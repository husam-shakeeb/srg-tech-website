import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsuccessComponent } from './emailsuccess.component';

describe('EmailsuccessComponent', () => {
  let component: EmailsuccessComponent;
  let fixture: ComponentFixture<EmailsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
