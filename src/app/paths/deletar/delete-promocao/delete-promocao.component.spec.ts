import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePromocaoComponent } from './delete-promocao.component';

describe('DeletePromocaoComponent', () => {
  let component: DeletePromocaoComponent;
  let fixture: ComponentFixture<DeletePromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
