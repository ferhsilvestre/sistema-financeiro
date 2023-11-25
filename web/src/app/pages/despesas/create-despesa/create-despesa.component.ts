import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { InputComponent } from 'src/app/core/forms/input/input.component';
import { Despesa } from 'src/app/core/models/despesa';

@Component({
  selector: 'app-create-despesa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputComponent, HttpClientModule],
  templateUrl: './create-despesa.component.html',
  styleUrls: ['./create-despesa.component.scss']
})
export class CreateDespesaComponent implements OnInit {
  despesa: Despesa | null = null;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ngbActiveModal: NgbActiveModal,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      category: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      value: ['', Validators.required]
    });

    if (this.despesa) {
      this.formGroup.patchValue({
        ...this.despesa
      });
    }
  }
  submit(): void {
    if (this.formGroup.invalid) {
      this.toastrService.error('Não foi possível salvar.');
      return;
    }

    const despesa = this.formGroup.value;

    this.toastrService.success('Despesa salva.');

    if (this.despesa) {
      this.closeModal(despesa);
      return;
    }

    this.closeModal();
  }

  closeModal(despesa: Despesa | null = null): void {
    this.ngbActiveModal.close(despesa);
  }
}
