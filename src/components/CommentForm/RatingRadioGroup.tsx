import { Fragment } from 'react';

type TRatingRadioGroupProps = {
  handleChange: (value: string, field: 'review' | 'rating') => void;
};

function RatingRadioGroup({ handleChange }: TRatingRadioGroupProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {[5, 4, 3, 2, 1].map((v) => (
        <Fragment key={v}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={v}
            id={`${v}-stars`}
            type="radio"
            onChange={(evt) => handleChange(evt.target.value, 'rating')}
          />
          <label
            htmlFor={`${v}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default RatingRadioGroup;
