import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'app/shared/services/register.service';
import { IUser } from 'app/shared/interface/IUser';
import { HttpErrorResponse } from '@angular/common/http';
import { JsEncryption } from 'app/shared/services/jsEncryption.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    
    fullName: string;
    userName: string;
    passWord: string;
    firstName: string;

    processing: boolean;
    show: boolean;
    login: boolean;

    closeResult: string;
    isActive = false;
    showMenu = '';
    user: IUser;

    @Input() loginUser: string;
    @Input() loginPassword: string;
    constructor(private modal: NgbModal, private _register: RegisterService, private _encryptor: JsEncryption) { }


    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    //-----------------------------------------------------------------------------------
    //Opens or closes the modal
    open(content) {
        console.log('opened');
        this.modal.open(content).result.then((result) => {
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

 //-----------------------------------------------------------------------------------

    getUser(content) {

        this._register.getUser(this.loginUser)
            .subscribe(res => {
                this.user = res;

                if (this.verifyUser(this.user.password, content)) {
                    this.getFirstName();
                    localStorage.setItem('currentUser', this.fullName);
                    localStorage.setItem('userName', this.userName);
                }
                /* //this is to test the encryption funstions ive created. (found in the jsEncription.service class)
                var temp: string;
                temp = this._encryptor.encrypt(this.user.fullName)
                console.log(this._encryptor.decrypt(this._encryptor.encrypt(this.user.fullName)));
                */
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('Client-side Error occured');
                } else {

                    this.processing = false;
                    console.log('Server-side Error occured');
                }
            })


    }

    logout() {
        this.show = false;
        this.login = false;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userName');
    }

    getFirstName() {

        var index = this.fullName.indexOf(" ");

        this.firstName = this.fullName.slice(0, index);
    }

    verifyUser(password: string, content) {
        password = this._encryptor.decrypt(password);
        if (this.loginPassword == password) {
            this.login = true;
            this.show = true;
            this.load();
            this.loginPassword = '';
            this.loginUser = '';

            return true;
        } else {

            this.open(content);

            return false;
        }
    }

    load() {
        this.passWord = this.user.password;
        this.userName = this.user.userName;
        this.fullName = this.user.fullName;

    }

}
