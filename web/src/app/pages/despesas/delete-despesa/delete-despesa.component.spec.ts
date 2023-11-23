import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDespesaComponent } from './delete-despesa.component';

describe('DeleteDespesaComponent', () => {
  let component: DeleteDespesaComponent;
  let fixture: ComponentFixture<DeleteDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDespesaComponent]
    });
    fixture = TestBed.createComponent(DeleteDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
