import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesEntregaComponent } from './instrucciones-entrega.component';

describe('InstruccionesEntregaComponent', () => {
  let component: InstruccionesEntregaComponent;
  let fixture: ComponentFixture<InstruccionesEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstruccionesEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstruccionesEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
