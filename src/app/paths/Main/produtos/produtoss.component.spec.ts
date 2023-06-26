import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutossComponent } from './produtoss.component';

describe('ProdutossComponent', () => {
  let component: ProdutossComponent;
  let fixture: ComponentFixture<ProdutossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
