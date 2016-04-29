import { Component } from 'angular2/core';
import { RioCommentList } from '../components';
import { RioContainer } from '../components';

@Component({
  selector: 'rio-comments-page',
  directives: [ RioContainer, RioCommentList ],
  template: `
    <rio-container>
      <rio-comment-list>
      </rio-comment-list>
    </rio-container>
  `
})
export class RioCommentsPage {
}
