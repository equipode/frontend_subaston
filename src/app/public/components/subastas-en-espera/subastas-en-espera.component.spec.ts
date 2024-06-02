import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastasEnEsperaComponent } from './subastas-en-espera.component';

describe('SubastasEnEsperaComponent', () => {
  let component: SubastasEnEsperaComponent;
  let fixture: ComponentFixture<SubastasEnEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubastasEnEsperaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubastasEnEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
