import { Component } from '@angular/core';



@Component({

  selector: 'app-switch',

  templateUrl: './switch.component.html',

  styleUrls: ['./switch.component.css']

})

export class SwitchComponent {

  state = 'on';



  constructor() { }



  onClick(event: any) {

    let value = event.target.value;

    console.log(event.target.value);

    if (this.state === 'off'){

      this.state = 'on';

    } else if (this.state === 'on'){

      this.state = 'off';

    } else {

      this.state = 'off';

    }

    if (value === 'on'){

      console.log(1);

    }else {

      console.log(0);

    }

  }



}
