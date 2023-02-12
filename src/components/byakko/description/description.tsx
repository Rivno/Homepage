import { getHighlightTechName } from './getHighlightTechName';

import styles from './description.module.css';

export const Description = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  const desc = getHighlightTechName(children as string);

  return (
    <p className={styles.container} {...props}>
      {desc}
    </p>
  );
};
