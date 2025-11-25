import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
id: any;
// we use the dependency injection
constructor(private route: ActivatedRoute) {
this.route.paramMap.subscribe((paramMap: { get: (arg0: string) => any; }) => {
// we call for 'id' parameter, the same name used in the route
this.id = paramMap.get("id");
});
}
}