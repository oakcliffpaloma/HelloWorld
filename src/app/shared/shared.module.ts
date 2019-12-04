import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as pipes from './pipes';

@NgModule({
  declarations: [
    pipes.RepeatPipe,
    pipes.ReversePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    pipes.RepeatPipe,
    pipes.ReversePipe
  ]
})
export class SharedModule { }