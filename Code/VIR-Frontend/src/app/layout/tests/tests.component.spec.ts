import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestsComponent } from './tests.component';
//import { HttpClientTestingModule } from '@angular/common/http/testing';
//import { FormsModule } from '@angular/forms';
//import { TextService } from '../../shared'
import { Router } from '@angular/router';

describe('TestsComponent', () => {
    let component: TestsComponent;
    let fixture: ComponentFixture<TestsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
               // HttpClientTestingModule,
               // FormsModule,
            ],
            declarations: [TestsComponent],
            providers: [
                //TextService,
                { provide: Router }
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
