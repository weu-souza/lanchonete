import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProdutoComponent } from './adicionar-produto.component';

describe('ContatoComponent', () => {
  let component: AdicionarProdutoComponent;
  let fixture: ComponentFixture<AdicionarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
