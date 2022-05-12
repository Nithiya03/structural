import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'structural-directives';
  ifcase=false;
  gender="male";
  lottery="yes";
  color="green";
  status="ok";
  countries=['Japan','China','Korea','India','France','Italy']
  phoneCode=[
    {
      country:'Japan',
      code:81
    },
    {
      country:'China',
      code:86
    },
    {
      country:'Korea',
      code:82
    },
    {
      country:'India',
      code:91
    },
    {
      country:'France',
      code:33
    },
    {
      country:'Italy',
      code:39
    }
  ]
}