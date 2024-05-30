import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogauthComponent } from './logauth.component';

describe('LogauthComponent', () => {
  let component: LogauthComponent;
  let fixture: ComponentFixture<LogauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogauthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
