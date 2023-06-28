import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCarrinhPrmocaoComponent } from './adicionar-carrinh-prmocao.component';

describe('AdicionarCarrinhPrmocaoComponent', () => {
  let component: AdicionarCarrinhPrmocaoComponent;
  let fixture: ComponentFixture<AdicionarCarrinhPrmocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarCarrinhPrmocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCarrinhPrmocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
