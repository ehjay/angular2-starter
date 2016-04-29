import { CommentService } from './comment-service';

describe('comment-service', () => {
  it('should start with 3 comments', () => {
    const commentService: CommentService = new CommentService();
    chai.expect(commentService.comments.length).to.be.equal(3);
  });

});
