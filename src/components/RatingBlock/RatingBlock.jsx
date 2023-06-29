import React from 'react';
import './RatingBlock.scss';
import ShowMoreButton from '../Buttons/ShowMoreButton/ShowMoreButton';
import RatingRow from './RatingRow/RatingRow';
import { ratingData } from '../../utils/constants';

const RatingBlock = () => {
  return (
    <section className={'rating'}>
      <header className={'rating__header'}>
        <h3 className={'rating__title'}>Рейтинг</h3>
        <ShowMoreButton />
      </header>
      <div className={'rating__rows'}>
        {ratingData.map((row) => (
          <RatingRow
            key={row.id}
            title={row.title}
            percent={row.percent}
            placeColor={row.placeColor ? row.placeColor : ''}
            place={row.place}
            image={row.image}
          />
        ))}
      </div>
    </section>
  );
};

export default RatingBlock;
