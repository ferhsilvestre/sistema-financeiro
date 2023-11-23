import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Despesa } from 'src/app/core/models/despesa';
import { CreateDespesaComponent } from './create-despesa/create-despesa.component';
import { DeleteDespesaComponent } from './delete-despesa/delete-despesa.component';

@Component({
  standalone: true,
  imports: [CommonModule, NgbModalModule, DatePipe],
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {
  despesas: Despesa[] = [
    {
      id: 1,
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      id: 2,
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      id: 3,
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      id: 4,
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      id: 5,

      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      id: 6,

      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    }
  ];

  constructor(private ngbModal: NgbModal) {}

  ngOnInit(): void {}

  editDespesa(despesa: Despesa): void {
    this.openMoalDespesa(despesa);
  }

  async openMoalDespesa(despesa: Despesa | null = null): Promise<void> {
    const modalRef = this.ngbModal.open(CreateDespesaComponent, {
      size: 'lg',
      centered: true
    });

    if (despesa) {
      modalRef.componentInstance.despesa = despesa;
    }

    const result = await modalRef.result;

    console.log(result);
  }

  async openModalExcluir(id: number): Promise<void> {
    const modalRef = this.ngbModal.open(DeleteDespesaComponent, {
      size: 'sm',
      centered: true
    });

    if (id) {
      modalRef.componentInstance.id = id;
    }

    const result = await modalRef.result;

    console.log(result);
  }

  excluirDespesa(id: number) {
    this.openModalExcluir(id);
  }
}
