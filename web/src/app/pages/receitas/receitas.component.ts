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
  receitas: Receita[] = [
    {
      id: 1,
      date: new Date(),
      description: 'Salário',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 5999
    },
    {
      id: 2,
      date: new Date(),
      description: 'Venda de tenis',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 599
    },
    {
      id: 3,
      date: new Date(),
      description: 'Site de vendas',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 12999
    },
    {
      id: 4,
      date: new Date(),
      description: 'App de finanças',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 39999
    },
    {
      id: 5,

      date: new Date(),
      description: 'E-commerce',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 79999
    },
    {
      id: 6,

      date: new Date(),
      description: 'Site institucional',
      user_id: 'o|zkR|cKKoeSYJ3IJWXrWA==',
      value: 5999
    }
  ];

  ngOnInit(): void {}

  editReceita(receita: Receita): void {
    this.openMoalReceita(receita);
  }

  excluirReceita(id: number): void {
    console.log(id);
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
