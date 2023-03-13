export type SkeletonProps = {
  width?: string;
} & Partial<Omit<HTMLSpanElement, 'children' | 'width'>>;
