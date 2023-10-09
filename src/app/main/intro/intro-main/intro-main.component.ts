import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-main',
  templateUrl: './intro-main.component.html',
  styleUrls: ['./intro-main.component.scss']
})
export class IntroMainComponent {
  ngOninit(){
    console.log('masuk component intro')
  }

}
