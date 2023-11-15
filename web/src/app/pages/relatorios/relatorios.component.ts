import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  imports: [CommonModule, NgbModalModule, DatePipe],
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  monthNames: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  arrayDeNomes = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Carlos' },
    { id: 4, nome: 'Ana' }
    // Adicione mais objetos conforme necessário
  ];

  relatorioMensal = [
    {
      recebido: 400,
      gasto: 200,
      lucro: 200
    }
  ];
}
