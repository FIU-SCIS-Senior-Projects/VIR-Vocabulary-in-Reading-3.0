import { Component, OnInit , Input} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { SimpleTimer } from 'ng2-simple-timer';

import { TestBanks } from '../../../shared/services/testBanks/testBanks.service';


@Component({
    selector: 'app-academic',
    templateUrl: './beginner.component.html',
    styleUrls: ['./beginner.component.scss'],
    animations: [routerTransition()] 
})


export class BeginnerComponent implements OnInit {

    public static BACK_LABEL: string = ' To Categories';

    backLabel: string = BeginnerComponent.BACK_LABEL;
    question: string;
    answer: string;
    options: any[];
    selection: string;
    closeResult: string;
    correctAnswer: string;
    level: string;
    standing: string;
    timerId: string;
    suggestion: string;

    numberOfQuestions: number;
    numWrong: number = 0;
    numRight: number = 0;
    numSkipped: number = 0;
    attempted: number = 0;
    usedQuetions: number[] = []; 
    usedIndex: number = 0;
    percent: number;
    timer: number = 0;

    correct: boolean;
    wrong: boolean;
    skip: boolean;
    used: boolean;
    alrt: boolean = false;
    timeUp: boolean = false;
    showOnlyIcons: boolean;


    counter: number = 0;
    randID: number = Math.floor(Math.random() * Math.floor(20));

    submited: boolean = false;
    start: boolean = false;
    finished: boolean = true;

    @Input() radioData: string;

    constructor(private _location: Location, private _modalService: NgbModal, private _route: ActivatedRoute,
        private simpleT: SimpleTimer, private _test: TestBanks) {

        this.level = this._route.snapshot.paramMap.get('id');
        _test.getQuestion(this.randID, this.level);
        this.question = _test.question;
        this.answer = _test.answer;
        this.options = _test.options;

        this.numberOfQuestions = _test.totalQuestions;

    }


    ngOnInit() {

        window.scrollTo(0, 0);
        this.level = this._route.snapshot.paramMap.get('id');
        this.determineLevel(this.level);
        this.showOnlyIcons = window.innerWidth <= 680;
        this.updaTeLabels();

    }


    startQuiz() {

        this.start = true;
        this.finished = false;
        this.simpleT.newTimer('1sec', 1);
        this.subscribeTimer();

    }


    onResize(event) {
        this.showOnlyIcons = window.innerWidth <= 680;
        this.updaTeLabels();
        event.target.innerWidth;
    }

    private updaTeLabels(): void {
        this.backLabel = this.showOnlyIcons ? '' : BeginnerComponent.BACK_LABEL;
        
    }


    subscribeTimer() {
        if (this.timerId) {
            // Unsubscribe if timer Id is defined
            this.simpleT.unsubscribe(this.timerId);
            this.timerId = undefined;
            //console.log('timer 0 Unsubscribed.');
            
        } else {

            this.timer = -1;
            // Subscribe if timer Id is undefined
            this.timerId = this.simpleT.subscribe('1sec', () => this.timerCallback());
            //console.log('timer 0 Subscribed.');
            this.timeUp = false;
        }
  
    }


    timerCallback() {

        if (this.timer < 60) {
            this.timer++;
        } else {
            // Unsubscribe if timer Id is defined
            this.simpleT.unsubscribe(this.timerId);
            this.timerId = undefined;
            this.timeUp = true;
            this.submited = true;
            this.attempted++;
            this.numWrong++;
            this.wrong = true;
        }

    }


    validate() {

        this.selection = this.radioData;
        this.submited = true;
        this.attempted++;
        this.alrt = false;
        this.subscribeTimer();

        if (this.selection == this.answer) {
            this.correct = true;
            this.numRight = this.numRight + 1;

        } else {

            this.wrong = true;
            this.numWrong = this.numWrong + 1;

            this.correctAnswer = this._test.options[this.answer];//Gets the value of the correct answer

        }
    }

    
    nextQuestion(content) {

        if (!this.submited) {
            this.open(content);
        }//If question is not submited, the warning modal will pop up

        else if (this.submited || this.skip) {

            this.counter++;

            this.usedQuetions[this.usedIndex] = this.randID;
            this.usedIndex++;

            this.randID = Math.floor(Math.random() * Math.floor(this.numberOfQuestions));

            this.checkUsed(this.randID);

            while (this.used == true && this.counter < this.numberOfQuestions) {

                this.randID = Math.floor(Math.random() * Math.floor(this.numberOfQuestions));

                this.checkUsed(this.randID);
            }//This keeps getting a random number that has not been used, then returns it

            if (this.counter < this.numberOfQuestions) {

                //this._question.questionsLib(this.randID);
                this._test.getQuestion(this.randID, this.level);
                this.updateInfo();

                this.submited = false;
                this.skip = false;

                this.correct = false;
                this.wrong = false;
                this.alrt = false;
                this.subscribeTimer();

            } else {

                this.finished = true;
            }//Keeps loading questions until no more questions, once done, finish quiz
        }

    }


    private updateInfo() {

        this.question = this._test.question;
        this.answer = this._test.answer;
        this.options = this._test.options;

    }


    finishQuiz(stats) {

        if (this.attempted >= 10) {
            this.open(stats);
            this.finished = true;
            this.simpleT.unsubscribe(this.timerId);
            
        } else {
            this.alrt = true;
        }

    }


    //This will calculate the percentage of the quiz taken
    calcPercentage() {
        this.percent = Math.round((this.numRight / this.attempted) * 100);

        if (this.percent >= 85 && this.percent <= 100)
            this.suggestion = "Move on to the next level.";
        else if (this.percent >= 70 && this.percent < 85)
            this.suggestion = "Needs practice before going to next level.";
        else if (this.percent >= 60 && this.percent < 70)
            this.suggestion = "Stay in this level and have more vocabulary exercises";
        else if (this.percent < 60)
            this.suggestion = "Needs further instruction.";

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
        this.subscribeTimer();
    }


    determineLevel(lvl:string) {

        if (lvl == "beginner") {
            this.level = "Beginner";
        }
        else if (lvl == "advanced") {
            this.level = "Advanced";
        }
        else if (lvl == "intermediate") {
            this.level = "Intermediate";
        }
        else if (lvl == "upper") {
            this.level = "Upper Intermediate";
        }
        else if (lvl == "vocab") {
            this.level = "Vocabulary Size";
        }
    }


    //this checks if the question has been used or not
    checkUsed(id: number) {

        this.used = false;

        for (let i of this.usedQuetions) {

            if (i == id) {

                this.used = true;
                
            }
        }

    }
}
