import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from 'src/app/core/forms/input/input.component';

@Component({
  selector: 'app-create-despesa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputComponent, HttpClientModule],
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
      category: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  closeModal(): void {
    this.ngbActiveModal.close();
  }
}
