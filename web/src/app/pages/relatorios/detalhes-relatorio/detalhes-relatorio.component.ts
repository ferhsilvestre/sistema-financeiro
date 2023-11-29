import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalhes-relatorio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './detalhes-relatorio.component.html',
  styleUrls: ['./detalhes-relatorio.component.scss']
})
export class DetalhesRelatorioComponent implements OnInit {
  constructor(private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeModal(): void {
    this.ngbActiveModal.close();
  }
}
