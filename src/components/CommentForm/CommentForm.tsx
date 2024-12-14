import { FormEvent, useState } from 'react';
import RatingRadioGroup from './RatingRadioGroup.tsx';

type TFormState = {
  rating: string;
  review: string;
};

const initialFormState: TFormState = {
  rating: '',
  review: '',
};

function CommentForm() {
  const [formState, setFormState] = useState<TFormState>(initialFormState);

  const handleChangeFormValue = (value: string, field: 'review' | 'rating') => {
    setFormState({ ...formState, [field]: value });
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormState(initialFormState);
  };

  const { rating, review } = formState;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingRadioGroup handleChange={handleChangeFormValue} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(evt) => handleChangeFormValue(evt.target.value, 'review')}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!rating || !review}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
