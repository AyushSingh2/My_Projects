import { Component } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  faComments = faComments;
}
