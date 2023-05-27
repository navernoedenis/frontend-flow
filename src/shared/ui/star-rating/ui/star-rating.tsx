import { useState, useEffect, useCallback } from 'react';
import { classNames } from '@/shared/lib/transforms/class-names';

import classes from './star-rating.module.scss';
import StarIcon from './assets/star.svg';

interface StarRatingProps {
  align?: 'start' | 'center' | 'end';
  className?: string;
  onStarRate?: (rate: number) => void;
  rating?: number;
  stars?: number;
}

function StarRating({
  align = 'start',
  className = '',
  onStarRate,
  rating = 0,
  stars = 5,
}: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState(rating);

  const handleStarRate = useCallback(
    (stars: number) => () => {
      if (onStarRate) {
        onStarRate(stars);
      }
    },
    [onStarRate],
  );

  const handleMouseEnter = useCallback(
    (star: number) => () => {
      setHoveredStar(star);
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredStar(rating);
  }, [rating]);

  useEffect(() => {
    setHoveredStar(rating);
  }, [rating]);

  const containerClasses = classNames(classes.container, {
    [className]: !!className,
    [classes[`align-${align}`]]: true,
    [classes.selected]: rating > 0,
  });

  return (
    <div className={containerClasses} data-testid="star-rating">
      {Array.from({ length: stars }, (_, index) => (
        <StarIcon
          className={classNames(classes.star, {
            [classes.active]: (rating || hoveredStar) > index,
          })}
          data-testid="star-rating-icon"
          key={index}
          onClick={handleStarRate(index + 1)}
          onMouseEnter={handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default StarRating;
