import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from 'src/app/core/forms/input/input.component';

@Component({
  selector: 'app-create-despesa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputComponent],
  templateUrl: './create-despesa.component.html',
  styleUrls: ['./create-despesa.component.scss']
})
export class CreateDespesaComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ngbActiveModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  closeModal(): void {
    this.ngbActiveModal.close();
  }
}
