import { Component } from 'angular2/core';
import { RioContainer } from '../components';

@Component({
  selector: 'rio-comments-page',
  directives: [ RioContainer ],
  template: `
    <rio-container>
      <h2 class="caps">Comments</h2>
      <p>
        Comments go here
      </p>
    </rio-container>
  `
})
export class RioCommentsPage {}
