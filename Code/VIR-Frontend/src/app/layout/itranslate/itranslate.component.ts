import { Component, Input, NgModule, OnInit} from '@angular/core';
import { iTranslation } from '../../shared'
import { iTranslateService } from '../../shared/services'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-itranslate',
  templateUrl: './itranslate.component.html',
  styleUrls: ['./itranslate.component.scss'],
  
})
export class ItranslateComponent implements OnInit {
  @Input() textArea: string;
  @Input() target: string;
  itranslation:iTranslation;
  
  constructor(private _itranslate:iTranslateService) { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.textArea);
  }

  changeLang(target:string){
    this.target=target;
    console.log(this.target);
  }

  translate(){
    
    this._itranslate.getTranslation(this.textArea, this.target).subscribe(res=>{this.itranslation=res; });

  }


}
