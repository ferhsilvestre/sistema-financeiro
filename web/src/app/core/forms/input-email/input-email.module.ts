import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { InputEmailComponent } from './input-email.component';

@NgModule({
  declarations: [InputEmailComponent],
  exports: [InputEmailComponent],
})
export class InputEmailModule {}
