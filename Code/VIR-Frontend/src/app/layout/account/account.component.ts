import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';



@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    animations: [routerTransition()],
})
export class UserAccount implements OnInit{

    username: string;
    fullName: string;

    ngOnInit() {
        this.username = localStorage.getItem('userName');
        this.fullName = localStorage.getItem('currentUser');
    }
}

