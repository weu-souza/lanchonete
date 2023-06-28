import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarIngredienteComponent } from './adicionar-ingrediente.component';

describe('AdicionarIngredienteComponent', () => {
  let component: AdicionarIngredienteComponent;
  let fixture: ComponentFixture<AdicionarIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
