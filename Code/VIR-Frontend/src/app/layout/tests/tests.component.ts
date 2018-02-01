import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss'],
    animations: [routerTransition()]
})
export class TestsComponent implements OnInit {

    ngOnInit(){

        window.scrollTo(0, 0);

    }
}
