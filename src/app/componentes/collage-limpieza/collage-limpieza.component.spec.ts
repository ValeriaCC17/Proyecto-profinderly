import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageLimpiezaComponent } from './collage-limpieza.component';

describe('CollageLimpiezaComponent', () => {
  let component: CollageLimpiezaComponent;
  let fixture: ComponentFixture<CollageLimpiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollageLimpiezaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollageLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
