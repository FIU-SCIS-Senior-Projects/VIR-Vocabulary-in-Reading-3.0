import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestsComponent } from './tests.component';

describe('TestsComponent', () => {
    let fixture: ComponentFixture<TestsComponent>;
    let component: TestsComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                TestsComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestsComponent);
        component = fixture.componentInstance;
    });

    it('should be created', async(() => {
        expect(component).toBeTruthy();
    }));

});