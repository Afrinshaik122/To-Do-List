import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component'; // Import the To-Do component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent], // Include TodoComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular To-Do App';
}