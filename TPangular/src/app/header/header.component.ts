import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = 'header component';
  altText = 'photo sympas';
  srcPath = 'https://lonelyplanetimages.imgix.net/a/g/hi/t/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg?sharp=10&vib=20&w=1200';
  authenticated = false;
  options: string[] = ['green', 'red', 'blue'];
  borderColor: string = 'black';

  constructor() {
    this.updateUI();

  }

  updateUI(){
    setTimeout(() => {
      console.log('Update UI');
      this.title += ' updated';
      this.authenticated = !this.authenticated;
      this.options.push('New option');
    }, 1500);

  }



  onChange(event: any) {
    let value = event.target.value;
    console.log(value);
    if (value === 'New option'){
      this.borderColor = 'yellow';
    }else {
      this.borderColor = value;
    }
  }
}
