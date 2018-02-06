import { Component, OnInit , Input} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { BeginnerTestBank } from '../../../shared/services/beginnerTestBank.service';


@Component({
    selector: 'app-academic',
    templateUrl: './beginner.component.html',
    styleUrls: ['./beginner.component.scss'],
    animations: [routerTransition()] 
})


export class BeginnerComponent implements OnInit {

    question: string;
    answer: string;
    options: any[];
    selection: string;
    closeResult: string;
    correctAnswer: string;

    numberOfQuestions: number;
    numWrong: number = 0;
    numRight: number = 0;
    numSkipped: number = 0;

    correct: boolean;
    wrong: boolean;
    skip: boolean;

    id: number = 0;
    randID: number = 0;

    submited: boolean = false;
    start: boolean = false;

    @Input() radioData: string;

    constructor(private _question: BeginnerTestBank, private _location: Location, private _modalService: NgbModal) {

        _question.questionsLib(this.id);

        this.question = _question.question;
        this.answer = _question.answer;
        this.options = _question.options;

        this.numberOfQuestions = _question.totalQuestions;

    }

    startQuiz() {

        this.start = true;

    }

    validate() {

        this.selection = this.radioData;
        this.submited = true;

        if (this.selection == this.answer) {
            this.correct = true;
            this.numRight = this.numRight + 1;

        } else {
            this.wrong = true;
            this.numWrong = this.numWrong + 1;

            this.correctAnswer = this._question.options[this.answer];//Gets the value of the correct answer

        }
    }
    
    nextQuestion(content) {

        if (!this.submited) {
            this.open(content);
        }
        else if (this.submited || this.skip) {

            this.id = this.id + 1;

            //this will get a random number, this number will be used to get the next question.
            this.randID = Math.floor(Math.random() * Math.floor(this.numberOfQuestions));

            if (this.id < this.numberOfQuestions) {
                this._question.questionsLib(this.randID);
                this.updateInfo();
                this.submited = false;
                this.skip = false;

                this.correct = false;
                this.wrong = false;
                }
        }

    }

    private updateInfo() {

        this.question = this._question.question;
        this.answer = this._question.answer;
        this.options = this._question.options;

    }


    ngOnInit() {

        window.scrollTo(0, 0);

    }

    backClicked() {
        this._location.back();
    }

    // Definiton Model open
    open(content) {
        this._modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    skipQuestion() {
        this.skip = true;
        this.submited = true;
        this.numSkipped++;
    }
}
