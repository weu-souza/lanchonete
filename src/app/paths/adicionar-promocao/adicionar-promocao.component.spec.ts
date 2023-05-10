import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPromocaoComponent } from './adicionar-promocao.component';

describe('AdicionarPromocaoComponent', () => {
  let component: AdicionarPromocaoComponent;
  let fixture: ComponentFixture<AdicionarPromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarPromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
