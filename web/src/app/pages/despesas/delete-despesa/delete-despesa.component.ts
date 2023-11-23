import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { InputComponent } from 'src/app/core/forms/input/input.component';
import { Despesa } from 'src/app/core/models/despesa';

@Component({
  selector: 'app-delete-despesa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputComponent, HttpClientModule],
  templateUrl: './delete-despesa.component.html',
  styleUrls: ['./delete-despesa.component.scss']
})
export class DeleteDespesaComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ngbActiveModal: NgbActiveModal,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({});
  }

  submit(): void {
    if (this.formGroup.invalid) {
      this.toastrService.error('Não foi possível salvar.');
      return;
    }

    this.toastrService.success('Despesa salva.');

    this.closeModal();
  }

  closeModal(despesa: Despesa | null = null): void {
    this.ngbActiveModal.close(despesa);
  }
}
