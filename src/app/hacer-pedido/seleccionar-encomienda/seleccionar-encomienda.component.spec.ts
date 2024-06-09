import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarEncomiendaComponent } from './seleccionar-encomienda.component';

describe('SeleccionarEncomiendaComponent', () => {
  let component: SeleccionarEncomiendaComponent;
  let fixture: ComponentFixture<SeleccionarEncomiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeleccionarEncomiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionarEncomiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
