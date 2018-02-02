import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicComponent } from './academic.component';

const routes: Routes = [
    { path: '', component: AcademicComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcademicRoutingModule { }
