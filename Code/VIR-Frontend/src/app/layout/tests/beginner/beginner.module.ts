import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { BeginnerRoutingModule } from './beginner-routing.module';
import { BeginnerComponent } from './beginner.component';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        BeginnerRoutingModule,
        FormsModule,
    ],
    declarations: [
        BeginnerComponent,
    ]
})
export class BeginnerModule { } 
