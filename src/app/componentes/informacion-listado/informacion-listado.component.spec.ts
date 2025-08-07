import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionListadoComponent } from './informacion-listado.component';

describe('InformacionListadoComponent', () => {
  let component: InformacionListadoComponent;
  let fixture: ComponentFixture<InformacionListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
