import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateDespesaComponent } from './create-despesa/create-despesa.component';

@Component({
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {
  constructor(private ngbModal: NgbModal) {}

  ngOnInit(): void {
    this.openMoalDespesa();
  }

  openMoalDespesa(): void {
    this.ngbModal.open(CreateDespesaComponent, {
      size: 'lg',
      centered: true
    });
  }
}
