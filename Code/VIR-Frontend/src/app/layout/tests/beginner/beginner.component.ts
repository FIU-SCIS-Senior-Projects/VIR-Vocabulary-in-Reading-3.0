import { Component, OnInit , Input} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

import { BeginnerTestBank } from '../../../shared/services/testBanks/beginnerTestBank.service';


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
    level: string;

    bank: BeginnerTestBank;

    numberOfQuestions: number;
    numWrong: number = 0;
    numRight: number = 0;
    numSkipped: number = 0;
    attempted: number = 0;
    usedQuetions: number[] = []; 
    usedIndex: number = 0;

    correct: boolean;
    wrong: boolean;
    skip: boolean;
    used: boolean;


    counter: number = 0;
    randID: number = Math.floor(Math.random() * Math.floor(20));

    submited: boolean = false;
    start: boolean = false;
    finished: boolean = true;

    @Input() radioData: string;

    constructor(private _question: BeginnerTestBank, private _location: Location, private _modalService: NgbModal, private _route: ActivatedRoute) {

        _question.questionsLib(this.randID);

        this.question = _question.question;
        this.answer = _question.answer;
        this.options = _question.options;

        this.numberOfQuestions = _question.totalQuestions;

    }

    startQuiz() {

        this.start = true;
        this.finished = false;

    }

    validate() {

        this.selection = this.radioData;
        this.submited = true;
        this.attempted++;

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

            this.counter++;

            this.usedQuetions[this.usedIndex] = this.randID;
            this.usedIndex++;

            this.randID = Math.floor(Math.random() * Math.floor(this.numberOfQuestions));

            this.checkUsed(this.randID);

            while (this.used == true && this.counter < this.numberOfQuestions) {

                this.randID = Math.floor(Math.random() * Math.floor(this.numberOfQuestions));

                this.checkUsed(this.randID);
            }

            if (this.counter < this.numberOfQuestions) {

                this._question.questionsLib(this.randID);
                this.updateInfo();

                this.submited = false;
                this.skip = false;

                this.correct = false;
                this.wrong = false;

            } else {

                this.finished = true;
            }
        }

    }

    private updateInfo() {

        this.question = this._question.question;
        this.answer = this._question.answer;
        this.options = this._question.options;

    }

    finishQuiz(stats) {
        this.open(stats);
    }


    ngOnInit() {

        window.scrollTo(0, 0);
        this.level = this._route.snapshot.paramMap.get('id');
        this.determineLevel(this.level);
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
        this.attempted++;
    }

    determineLevel(lvl:string) {

        if (lvl == "beginner") {
            this.level = "Beginner";
        }
        else if (lvl == "advanced") {
            this.level = "Advanced";
        }
        else if (lvl == "intermediate") {
            this.level = "Intermedite";
        }
        else if (lvl == "upper") {
            this.level = "Upper Intermediate";
        }
        else if (lvl == "vocab") {
            this.level = "Vocabulary Sized";
        }
    }

    checkUsed(id: number) {

        this.used = false;

        for (let i of this.usedQuetions) {

            if (i == id) {

                this.used = true;
                
            }
        }

    }
}
