export const clickStopBubbling: React.MouseEventHandler<HTMLAnchorElement> = (
  e
) => {
  e.stopPropagation();
};
