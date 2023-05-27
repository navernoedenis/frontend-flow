import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';
import { StarRating } from '@/shared/ui/star-rating';

import classes from './rating-card.module.scss';

interface RatingCardProps {
  onStarRate?: (rate: number) => void;
  rating: number;
  stars?: number;
  title: string;
}

function RatingCard({ onStarRate, title, stars, rating = 0 }: RatingCardProps) {
  return (
    <Flexbox
      className={classes.container}
      data-testid="rating-card"
      direction="column"
    >
      <AppTypography
        capitalizeFirstLetter
        className={classes.title}
        data-testid="rating-card-title"
        size="large"
        weight="bold"
      >
        {title}
      </AppTypography>
      <StarRating onStarRate={onStarRate} rating={rating} stars={stars} />
    </Flexbox>
  );
}

export default RatingCard;
