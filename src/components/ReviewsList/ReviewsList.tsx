import CommentForm from '../CommentForm/CommentForm.tsx';
import { comments } from '../../mocks/comments.ts';
import { TComment } from '../../types/comments.ts';
import ReviewsItem from '../ReviewsItem/ReviewsItem.tsx';

function ReviewsList() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.slice(0, 9).map((comment: TComment) => (
          <ReviewsItem key={comment.id} commentItem={comment} />
        ))}
      </ul>
      <CommentForm />
    </section>
  );
}

export default ReviewsList;
