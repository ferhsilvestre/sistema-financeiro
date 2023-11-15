import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDespesaComponent } from './create-despesa.component';

describe('CreateDespesaComponent', () => {
  let component: CreateDespesaComponent;
  let fixture: ComponentFixture<CreateDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateDespesaComponent]
    });
    fixture = TestBed.createComponent(CreateDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
