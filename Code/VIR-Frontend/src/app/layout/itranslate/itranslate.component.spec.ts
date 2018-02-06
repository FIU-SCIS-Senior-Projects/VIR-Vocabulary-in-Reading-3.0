import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItranslateComponent } from './itranslate.component';
import { FormsModule } from '@angular/forms';

describe('ItranslateComponent', () => {
    let fixture: ComponentFixture<ItranslateComponent>;
    let component: ItranslateComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule
            ],
            declarations: [
                ItranslateComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItranslateComponent);
        component = fixture.componentInstance;
    });

    it('should be created', async(() => {
        expect(component).toBeTruthy();
    }));

});
