import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { InputComponent } from 'src/app/core/forms/input/input.component';
import { Receita } from 'src/app/core/models/receita';

@Component({
  selector: 'app-create-receita',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './create-receita.component.html',
  styleUrls: ['./create-receita.component.scss']
})
export class CreateReceitaComponent implements OnInit {
  receita: Receita | null = null;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ngbActiveModal: NgbActiveModal,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      value: ['', Validators.required]
    });

    if (this.receita) {
      this.formGroup.patchValue({
        date: this.receita.date,
        description: this.receita.description,
        value: this.receita.value
      });
    }
  }

  submit(): void {
    if (this.formGroup.invalid) {
      this.toastrService.error('Não foi possível salvar.');
      return;
    }

    const receita = this.formGroup.value;

    this.toastrService.success('Receita salva.');

    if (this.receita) {
      this.closeModal(receita);
      return;
    }

    this.closeModal();
  }

  closeModal(receita: Receita | null = null): void {
    this.ngbActiveModal.close(receita);
  }
}
