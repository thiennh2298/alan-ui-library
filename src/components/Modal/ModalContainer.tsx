import React from "react";
import cx from "classnames";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  className?: string;
  width?: string;
  children?: string | React.ReactNode;
};

const ModalContainer = (
  { className, width = "520px", children, ...rest }: Props,
  ref: any
) => {
  const widthStyle = React.useMemo(() => {
    return `w-[${width}]`;
  }, [width]);
  return (
    <div
      ref={ref}
      className={cx(
        "h-max min-h-min-modal min-w-min-modal z-10 bg-white rounded",
        "flex flex-col justify-between animate-blowUp",
        widthStyle
      )}
      style={{ width: `${width}`}}
      {...rest}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(ModalContainer);
