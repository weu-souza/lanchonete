import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCarrinhProdutoComponent } from './adicionar-carrinh-produto.component';

describe('AdicionarCarrinhProdutoComponent', () => {
  let component: AdicionarCarrinhProdutoComponent;
  let fixture: ComponentFixture<AdicionarCarrinhProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarCarrinhProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCarrinhProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
