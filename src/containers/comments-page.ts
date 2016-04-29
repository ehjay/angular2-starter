import { Component } from 'angular2/core';
import { RioContainer } from '../components';

@Component({
  selector: 'rio-comments-page',
  directives: [ RioContainer ],
  template: `
    <rio-container>
      <h2 class="caps">Comments</h2>
      <div *ngFor='#comment of comments'>
        {{ comment }}
      </div>
    </rio-container>
  `
})
export class RioCommentsPage {
  comments: string[] = [
    "What a lovely day",
    "Those green pants look very sharp",
    "I'm a comment!"
  ]
}
