import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItranslateComponent } from './itranslate.component';

describe('ItranslateComponent', () => {
  let component: ItranslateComponent;
  let fixture: ComponentFixture<ItranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
