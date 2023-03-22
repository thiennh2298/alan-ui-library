import React from "react"
import cx from 'classnames'
import { SpinnerOverlay } from './SpinnerOverlay';

type Props = {
  type: "default" | "full";
  overlayClass: string;
  spinnerClass: string;
  spinnerColor: string;
}

export const Spinner = ({type = 'default', overlayClass = '', spinnerClass = '', spinnerColor = ''}: Props) => {
  const color = React.useMemo(() => {
    if(!!spinnerColor) {
      return {
        '--spinner-color': spinnerColor,
        '--spinner-color-80': `${spinnerColor}80`,
        '--spinner-color-85': `${spinnerColor}85`,
        '--spinner-color-90': `${spinnerColor}90`,
        '--spinner-color-95': `${spinnerColor}95`,
      } as React.CSSProperties;
    }
    return {}
  }, [spinnerColor])

  if(type === 'default') return <div className={cx("spinner", spinnerClass)} style={{...color}}></div>
  return (
    <SpinnerOverlay>
      <div className={cx("spinner absolute z-[50] inset-1/2", spinnerClass)} style={{...color}}></div>
    </SpinnerOverlay>
  )
}