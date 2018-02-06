import { DefinitionService } from './../../shared/services/definition.service';
import { WordsListService } from './../../shared/services/wordsList.service';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItranslateRoutingModule } from './itranslate-routing.module';
import { ItranslateComponent } from './itranslate.component';
import { TextService } from '../../shared'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [
    CommonModule,
    ItranslateRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    NgbDropdownModule.forRoot()

  ],
  declarations: [ ItranslateComponent ],
  providers: [WordsListService, DefinitionService],
})
export class ItranslateModule { }
