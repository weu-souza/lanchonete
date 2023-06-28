import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarIngredienteComponent } from './alterar-ingrediente.component';

describe('AlterarIngredienteComponent', () => {
  let component: AlterarIngredienteComponent;
  let fixture: ComponentFixture<AlterarIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
