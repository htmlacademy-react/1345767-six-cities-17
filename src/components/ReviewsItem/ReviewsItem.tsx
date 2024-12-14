import { getRatingStyles } from '../../utils/getRatingStyles.ts';
import { TComment } from '../../types/comments.ts';
import classNames from 'classnames';
import { getStringDate } from '../../utils/getStringDate.ts';

type TReviewsItemProps = {
  commentItem: TComment;
};

function ReviewsItem({ commentItem }: TReviewsItemProps) {
  const {
    comment,
    rating,
    date,
    user: { name, isPro, avatarUrl },
  } = commentItem;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div
          className={classNames(
            'reviews__avatar-wrapper',
            { 'reviews__avatar-wrapper--pro': isPro },
            'user__avatar-wrapper',
          )}
        >
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={getRatingStyles(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {getStringDate(date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
