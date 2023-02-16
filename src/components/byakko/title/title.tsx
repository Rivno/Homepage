import classNames from 'classnames';

import styles from './title.module.css';

export const Title = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  const splitTitle = (children as string)?.split(' ') || [];
  return (
    <h1 className={classNames(styles.container, className)} {...props}>
      {splitTitle.map((word: string, i: number) => (
        <span key={`${word}-${i}`}>
          {word}
          {i < splitTitle.length - 1 ? '\f' : ''}
        </span>
      ))}
    </h1>
  );
};
