import { Component, Input } from 'angular2/core';
import { RioComment } from './comment';

@Component({
  selector: 'rio-comment-list',
  directives: [ RioComment ],
  template: `
    <div>
      <h2 class="caps">Comments</h2>
      <div *ngFor='#comment of comments'>
        <rio-comment
          [author]="comment.author"
          [text]="comment.text">
        </rio-comment>
      </div>
    </div>
  `
})
export class RioCommentList {
  @Input() comments: any[];
};
