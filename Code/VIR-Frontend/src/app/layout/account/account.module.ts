import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UserAccountRoutingModule } from './account-routing.module';
import { UserAccount } from './account.component';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule.forRoot(),
        UserAccountRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        UserAccount,
    ]
})
export class UserAccountModule { }
