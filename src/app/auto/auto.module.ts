import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoTableComponent } from './auto-table/auto-table.component';
import { AutoFormComponent } from './auto-form/auto-form.component';
import { AutoDetailComponent } from './auto-detail/auto-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule, 
        RouterModule, 
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    declarations: [AutoTableComponent, AutoFormComponent, AutoDetailComponent],
    exports: [AutoTableComponent],
})
export class AutoModule { }
