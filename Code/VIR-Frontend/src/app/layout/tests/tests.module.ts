import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        TestsRoutingModule,
    ],
    declarations: [
        TestsComponent,
    ]
})
export class TestsModule { }
