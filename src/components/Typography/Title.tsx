import React from 'react'
import cx from 'classnames'

type Props = {
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  copyable?: boolean;
  children?: string | React.ReactNode;
}

export const Title = ({
  level = 1,
  copyable = false,
  children,
  className,
}: Props) => {
  const Heading = `h${level}` as React.ElementType;
  const fontSize = React.useMemo(() => {
    if(level === 5) return 'text-h5 leading-h5'
    if(level === 4) return 'text-h4 leading-h4'
    if(level === 3) return 'text-h3 leading-h3'
    if(level === 2) return 'text-h2 leading-h2'
    return 'text-h1 leading-h1'
  }, [level])
  return (
    <Heading className={cx('text-txt-black font-medium', fontSize, className)}>{children}</Heading>
  );
};