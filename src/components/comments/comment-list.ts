import { Component } from 'angular2/core';

@Component({
  selector: 'rio-comment-list',
  template: `
    <div>
      <h2 class="caps">Comments</h2>
      <div *ngFor='#comment of comments'>
        {{ comment }}
      </div>
    </div>
  `
})
export class RioCommentList {
  comments: string[] = [
    'What a lovely day',
    'Those green pants look very sharp',
    'I\'m a comment!'
  ]
};
