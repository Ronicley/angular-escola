import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeFuncionariosComponent } from './cadastro-de-funcionarios.component';

describe('CadastroDeFuncionariosComponent', () => {
  let component: CadastroDeFuncionariosComponent;
  let fixture: ComponentFixture<CadastroDeFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
