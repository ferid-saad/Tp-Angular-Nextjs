import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})


export class AppComponent  {
  title = 'ngapp';
// import and inject in build angular Router module
constructor(private router: Router) { }
gotoLogin() {
this.router.navigate(['/login']);
}
gotoContact() {
this.router.navigate(['/contact']);
}
}