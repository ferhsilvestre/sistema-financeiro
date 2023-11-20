import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Receita } from 'src/app/core/models/receita';
import { CreateReceitaComponent } from './create-receita/create-receita.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {
  constructor(private ngbModal: NgbModal) {}

  ngOnInit(): void {
    this.openMoalReceita();
  }

  editDespesa(receita: Receita): void {
    this.openMoalReceita(receita);
  }

  async openMoalReceita(receita: Receita | null = null): Promise<void> {
    const modalRef = this.ngbModal.open(CreateReceitaComponent, {
      size: 'lg',
      centered: true
    });

    if (receita) {
      modalRef.componentInstance.receita = receita;
    }

    const result = await modalRef.result;

    console.log(result);
  }
}
