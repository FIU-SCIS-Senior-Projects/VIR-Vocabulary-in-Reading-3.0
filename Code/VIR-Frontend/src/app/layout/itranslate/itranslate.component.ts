import { Component, Input, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-itranslate',
  templateUrl: './itranslate.component.html',
  styleUrls: ['./itranslate.component.scss'],
  
})
export class ItranslateComponent implements OnInit {
  @Input() textArea: string;
  @Input() target: string;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.textArea);
  }

  changeLang(target){
    this.target=target;
    console.log(this.target)
  }
}
