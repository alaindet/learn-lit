import { Component } from '@angular/core';
import { User } from 'src/web-components/user';

import '../web-components/card-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  users: User[] = [
    {
      id: 1,
      fullName: 'John Doe',
      role: 'Iron Man',
      avatar: 'https://i.pravatar.cc/180',
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      role: 'Batwoman',
      avatar: 'https://i.pravatar.cc/180',
    },
  ];

  onEditUser(_event: Event) {
    const event = _event as CustomEvent<User>;
    const data = event.detail;
    console.log('onEditUser', event, data);
  }
}
