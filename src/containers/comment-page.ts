import { Component } from 'angular2/core';
import { RioCommentList } from '../components';
import { RioContainer } from '../components';
import { CommentService } from '../services/comment-service';

@Component({
  selector: 'rio-comment-page',
  providers: [CommentService],
  directives: [ RioContainer, RioCommentList ],
  template: `
    <rio-container>
      <rio-comment-list
        [comments]="commentPage.comments">
      </rio-comment-list>
    </rio-container>
  `
})
export class RioCommentPage {
  constructor(private commentPage: CommentService) { }
}
