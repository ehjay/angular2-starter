import { Component, Input } from 'angular2/core';

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
  @Input() comments: string[];
};
