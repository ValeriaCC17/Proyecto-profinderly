import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHogarComponent } from './card-hogar.component';

describe('CardHogarComponent', () => {
  let component: CardHogarComponent;
  let fixture: ComponentFixture<CardHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHogarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
