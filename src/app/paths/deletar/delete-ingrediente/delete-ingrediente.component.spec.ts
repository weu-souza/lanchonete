import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIngredienteComponent } from './delete-ingrediente.component';

describe('DeleteIngredienteComponent', () => {
  let component: DeleteIngredienteComponent;
  let fixture: ComponentFixture<DeleteIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
