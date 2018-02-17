import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BeginnerComponent } from './beginner.component';
import { SimpleTimer } from 'ng2-simple-timer';

describe('BeginnerComponent', () => {
    let fixture: ComponentFixture<BeginnerComponent>;
    let component: BeginnerComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                BeginnerComponent
            ],
            providers: [
                SimpleTimer
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeginnerComponent);
        component = fixture.componentInstance;
    });

    it('should be created', async(() => {
        expect(component).toBeTruthy();
    }));

});
