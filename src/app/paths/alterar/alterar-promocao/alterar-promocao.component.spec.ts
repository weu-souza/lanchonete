import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPromocaoComponent } from './alterar-promocao.component';

describe('AlterarPromocaoComponent', () => {
  let component: AlterarPromocaoComponent;
  let fixture: ComponentFixture<AlterarPromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarPromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
