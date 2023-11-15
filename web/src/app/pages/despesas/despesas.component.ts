import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Despesa } from 'src/app/core/models/despesa';
import { CreateDespesaComponent } from './create-despesa/create-despesa.component';

@Component({
  standalone: true,
  imports: [CommonModule, NgbModalModule, DatePipe],
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {
  despesas: Despesa[] = [
    {
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
      category: 'Lazer',
      date: new Date(),
      description: 'Ingresso',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 299
    },
    {
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
}
