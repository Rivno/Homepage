import classNames from 'classnames';

import styles from './title.module.css';

export const Title = ({
  children,
  className,
  dontSplit = false,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { dontSplit?: boolean }) => {
  const splitTitle = (children as string)?.split(' ') || [];
  return (
    <h1 className={classNames(styles.container, className)} {...props}>
      {!dontSplit ? (
        splitTitle.map((word: string, i: number) => (
          <span key={`${word}-${i}`}>{word}</span>
        ))
      ) : (
        <span>{children}</span>
      )}
    </h1>
  );
};
