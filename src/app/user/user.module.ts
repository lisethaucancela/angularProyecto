import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { UserTableComponent } from './user-table/user-table.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, RouterModule, ReactiveFormsModule
  ],
  declarations: [UserTableComponent, UserDetailComponent, UserFormComponent, UserEditComponent], 
  exports: [UserTableComponent],
})
export class UserModule { }
