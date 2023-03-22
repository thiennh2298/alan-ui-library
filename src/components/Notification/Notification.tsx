import React from "react";
import cx from "classnames";
import {
  SuccessIcon,
  CloseIcon,
  InfoIcon,
  WarningIcon,
  ErrorIcon,
} from "./NoficationIcon";

const NotificationIconMapping = {
  success: <SuccessIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

const NotificationColorMapping = {
  success: "rgb(34 197 94)",
  info: "rgb(14 165 233)",
  warning: "rgb(234 179 8)",
  error: "rgb(239 68 68)",
};

interface NotificationProps {
  type: "success" | "error" | "info" | "warning"; // "rgb(34 197 94)", "rgb(239 68 68)", "rgb(14 165 233)", "rgb(234 179 8)".
  message: string;
  title: string | React.ReactNode;
  duration: number;
  visible: boolean;
  onClose: () => void;
}

export const Notification = ({
  type = "success",
  message,
  title,
  duration = 0,
  visible = false,
  onClose,
}: NotificationProps) => {
  const borderLeft = React.useMemo(() => {
    return `border-[${NotificationColorMapping[type]}]`;
  }, [type]);
  return (
    <div
      className={cx(
        "flex items-center rounded-sm bg-white max-w-mobile w-full py-5 shadow-notification border-l-4",
         "border-green-500"
      )}
    >
      <div className="toast__icon">{NotificationIconMapping[type]}</div>
      <div className="toast__body">
        <h3>Success!</h3>
        <p>Bạn đã đúng</p>
      </div>
      <div className="toast__close">
        <CloseIcon />
      </div>
    </div>
  );
};
