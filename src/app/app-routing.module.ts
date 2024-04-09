import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { InicioComponent } from './portada/inicio/inicio.component';
import { AutoTableComponent } from './auto/auto-table/auto-table.component';
import { AutoFormComponent } from './auto/auto-form/auto-form.component';
import { AutoDetailComponent } from './auto/auto-detail/auto-detail.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'user',
    component: UserTableComponent,
  },
  {
    path: 'auto',
    component: AutoTableComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
  },
  {
    path: 'auto/:codigo',
    component: AutoDetailComponent,
  },
  {
    path: 'create',
    component: UserFormComponent,
  },
  {
    path: 'createAuto',
    component: AutoFormComponent,
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
