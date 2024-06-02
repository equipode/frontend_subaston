import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastasEnLineaComponent } from './subastas-en-linea.component';

describe('SubastasEnLineaComponent', () => {
  let component: SubastasEnLineaComponent;
  let fixture: ComponentFixture<SubastasEnLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubastasEnLineaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubastasEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
