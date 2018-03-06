import { Component, OnInit, NgModule, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../../shared/services/register.service'
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../shared/interface/IUser';
import { JsEncryption } from 'app/shared/services/jsEncryption.service';

@Component({
    selector: 'app-tests',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [routerTransition()]
})


export class RegisterComponent implements OnInit {
    closeResult: string;

    user: IUser;

    passWord: string;
    userName: string;
    fullName: string;
    userLevel: string;

    processing: boolean;
    match: boolean;
    closed: boolean = true;
    registered: boolean = false;
    show: boolean = false;
    login: boolean = false;

    @Input() uName: string;
    @Input() fName: string;
    @Input() pword: string;
    @Input() cPass: string;
    @Input() uLevel: string;
    @Input() loginUser: string;
    @Input() loginPassword: string;

    constructor(private _modalService: NgbModal, private _register: RegisterService, private _encryptor: JsEncryption) {

    }

    ngOnInit() {

    }

    close() {
        this.closed = true;
        this.registered = false;
        this.login = false;
    }

    comparePassword() {
        if (this.cPass == this.pword) {
            this.match = true;
            this.closed = true;
        }
        else {
            this.match = false;
            this.closed = false;
        }
    }

    //----------------------------------------
    //GetUtser will first verify if the username is in the database already prior registering the user

    getUser(content) {

        this._register.getUser(this.uName)
            .subscribe(res => {
                this.user = res;
                this.show = true;
                this.processing = false;
                this.open(content);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('Client-side Error occured');
                } else {

                    this.register(content);
                    this.processing = false;
                    console.log('User not in DB, will be added.');
                }
            })
      
        
    }

    //-----------------------------------------
    //Register will add the user info into the database once all has been verifed

    register(content) {
        this.passWord = this._encryptor.encrypt(this.pword);
        this.fullName = this.fName;
        this.userName = this.uName;
        this.userLevel = this.uLevel;

        this.comparePassword();

        if (this.match) {

            this.registered = true;

            this._register.postUser(this.fullName, this.userName, this.passWord, this.userLevel)
                .subscribe
                (res => {
                },
                (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                        console.log('Client-side Error occured');
                    } else {
                        this.processing = false;
                        console.log('Server-side Error occured');
                    }
                }
                );
        }
        else {

            this.registered = false;

        }


    }

    //-----------------------------------------------------------------------------------
    //Opens or closes the modal
    open(content) {
        this._modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    //-----------------------------------------------------------------------------------

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }


}
