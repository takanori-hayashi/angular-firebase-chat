import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentDatePipe } from '../pipe/comment-date.pipe';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    CommentDatePipe,
  ],
  declarations: [
    CommentDatePipe,
  ]
})
export class SharedModule { }
