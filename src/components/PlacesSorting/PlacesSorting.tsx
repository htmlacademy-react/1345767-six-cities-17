import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { SortingTypes } from '../../consts/const.ts';
import { changeSortingType } from '../../store/action.ts';
import { TSortingType } from '../../types/TSortingType.ts';
import { useEffect, useRef, useState } from 'react';

function PlacesSorting() {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const sortSpanRef = useRef<HTMLSpanElement>(null);
  const currentSortingType = useAppSelector((state) => state.sortingType);
  const dispatch = useDispatch();

  const hideSortingType = (evt: MouseEvent) => {
    if (
      sortSpanRef.current &&
      !sortSpanRef.current.contains(evt.target as HTMLElement)
    ) {
      setIsFormOpened(false);
    }
  };

  const handleChangeOffersOrder = (item: TSortingType) => {
    dispatch(changeSortingType(item));
  };

  useEffect(() => {
    document.addEventListener('click', hideSortingType);

    return () => {
      document.removeEventListener('click', hideSortingType);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        ref={sortSpanRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsFormOpened(!isFormOpened)}
      >
        {currentSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames('places__options places__options--custom', {
          'places__options--opened': isFormOpened,
        })}
      >
        {SortingTypes.map((sortingType) => (
          <li
            key={sortingType}
            className={classNames('places__option', {
              'places__option--active': currentSortingType === sortingType,
            })}
            tabIndex={0}
            onClick={() => handleChangeOffersOrder(sortingType)}
          >
            {sortingType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
