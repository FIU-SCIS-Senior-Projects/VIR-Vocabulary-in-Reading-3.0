import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './academic.component';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        AcademicRoutingModule,
    ],
    declarations: [
        AcademicComponent,
    ]
})
export class AcademicModule { } 
