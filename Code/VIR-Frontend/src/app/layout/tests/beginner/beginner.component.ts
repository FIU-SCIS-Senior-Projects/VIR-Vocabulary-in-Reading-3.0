import { Component, OnInit , Input} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';

import { BeginnerTestBank } from './testBank';


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

    numberOfQuestions: number;
    numWrong: number = 0;
    numRight: number = 0;

    correct: boolean;
    wrong: boolean;

    id: number = 0;

    submited: boolean = false;
    start: boolean = false;

    @Input() radioData: string;

    constructor(private _question: BeginnerTestBank, private _location: Location) {

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
        }

    }
    
    nextQuestion() {

        this.id = this.id + 1;

        if (this.id < this.numberOfQuestions) {
            this._question.questionsLib(this.id);
            this.updateInfo();
            this.submited = false;

            this.correct = false;
            this.wrong = false;
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
}
