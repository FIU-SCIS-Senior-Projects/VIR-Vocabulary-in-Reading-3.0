import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-academic',
    templateUrl: './academic.component.html',
    //styleUrls: ['./academic.component.scss'],
    animations: [routerTransition()]
})


export class AcademicComponent implements OnInit {

    ngOnInit() {

        window.scrollTo(0, 0);

    }
}
