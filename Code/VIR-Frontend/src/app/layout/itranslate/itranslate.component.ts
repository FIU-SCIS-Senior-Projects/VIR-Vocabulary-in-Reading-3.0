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
  data:any;
  t:any;
  t1:any;
  t2:any;
  
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
    
    this._itranslate.postTranslation(this.textArea, this.target).subscribe((rec:any)=>{this.data=rec["data"];
      console.log(this.data);
      this.t = this.data["translations"];
      console.log(this.t)
      this.t1 = this.t[0];
      console.log(this.t1["translatedText"]);
      this.t2 = this.t1["translatedText"]


    
    });
    
  }

  


}
