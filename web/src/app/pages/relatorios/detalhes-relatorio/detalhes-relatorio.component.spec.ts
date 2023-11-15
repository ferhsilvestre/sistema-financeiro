import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesRelatorioComponent } from './detalhes-relatorio.component';

describe('DetalhesRelatorioComponent', () => {
  let component: DetalhesRelatorioComponent;
  let fixture: ComponentFixture<DetalhesRelatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesRelatorioComponent]
    });
    fixture = TestBed.createComponent(DetalhesRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
