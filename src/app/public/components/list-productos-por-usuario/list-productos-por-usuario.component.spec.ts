import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductosPorUsuarioComponent } from './list-productos-por-usuario.component';

describe('ListProductosPorUsuarioComponent', () => {
  let component: ListProductosPorUsuarioComponent;
  let fixture: ComponentFixture<ListProductosPorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductosPorUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProductosPorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
