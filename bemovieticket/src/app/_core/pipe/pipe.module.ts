import { SafePipe } from './safe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SafePipe],
  imports: [
    CommonModule
  ],
  exports: [SafePipe]
  //cách tạo safepipe https://www.npmjs.com/package/safe-pipe
  //
})
export class PipeModule { }
