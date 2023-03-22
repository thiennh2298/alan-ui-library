import React from "react";
import cx from "classnames";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  buttonType?: "default" | "primary" | "ghost" | "text" | "link" | "dashed";
  size?: "small" | "middle" | "large";
  children: React.ReactNode | string;
  shape?: "default" | "circle" | "round";
};

export const Button = ({
  className,
  buttonType = "default",
  size = "middle",
  shape = "default",
  children,
  ...rest
}: Props) => {
  const height = React.useMemo(() => {
    if (size === "small") return "h-6";
    if (size === "large") return "h-10";
    return "h-8";
  }, [size]);

  // color
  const color = React.useMemo(() => {
    if (buttonType === "primary") return "text-white";
    if (buttonType === "link" || buttonType === "ghost") return "text-primary";
    return "text-txt-black";
  }, [buttonType]);
  // background
  const background = React.useMemo(() => {
    if (buttonType === "primary") return "bg-primary";
    return "bg-transparent";
  }, [buttonType]);
  // border
  const border = React.useMemo(() => {
    if (buttonType === "primary") return "border border-primary";
    if (buttonType === "ghost") return "border border-current";
    if (buttonType === "dashed") return "border border-dashed border-gray-4";
    if (["link", "text"].includes(buttonType)) return "border border-white";
    return "border border-gray-4";
  }, [buttonType]);
  // radius
  const radius = React.useMemo(() => {
    if (shape === "circle") return "rounded-full";
    if (shape === "round") return "rounded-round";
    return "rounded-sm";
  }, [shape]);

  return (
    <button
      className={cx(
        "px-2",
        height,
        color,
        background,
        border,
        radius,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
