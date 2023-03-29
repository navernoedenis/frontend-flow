import { useState } from 'react';
import { AppSkeleton } from 'shared/ui/app-skeleton';
import { classNames } from 'shared/lib/class-names';

import classes from './lazy-image.module.scss';

interface LazyImageProps {
  alt?: string;
  className?: string;
  originalSize?: boolean;
  src: string;
}

const LazyImage = ({
  alt = 'img',
  className = '',
  originalSize = false,
  src,
}: LazyImageProps) => {
  const [isLoaded, setLoaded] = useState(false);

  const containerClasses = classNames(classes.container, {
    [className]: !!className,
  });

  const imageClasses = classNames(classes.image, {
    [classes.imageLoaded]: isLoaded,
    [classes.imageOriginalSize]: originalSize,
  });

  return (
    <div className={containerClasses}>
      {!isLoaded && <AppSkeleton className={classes.skeleton} />}
      <img
        alt={alt}
        className={imageClasses}
        onLoad={() => setLoaded(true)}
        src={src}
      />
    </div>
  );
};

export default LazyImage;
