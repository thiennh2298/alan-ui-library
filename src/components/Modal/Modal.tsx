import React from "react";
import cx from "classnames";
import ModalContainer from "./ModalContainer";
import { ModalHeader } from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";

type Props = {
  visible?: boolean;
  maskClass?: string;
  modalClass?: string;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  title?: string;
  header?: string | React.ReactNode | null;
  footer?: string | React.ReactNode | null;
  maskClosable?: boolean;
  children?: string | React.ReactNode;
  cancelText?: string;
  okText?: string;
  onClose?: () => void;
  onCancel?: () => void;
  onOk?: () => void;
};

export const Modal = ({
  maskClass,
  modalClass,
  headerClass,
  bodyClass,
  footerClass,
  title,
  header,
  footer,
  maskClosable = true,
  visible,
  children = "",
  cancelText = "Cancel",
  okText = "Ok",
  onClose,
  onCancel,
  onOk,
}: Props) => {
  const modalRef = React.useRef<any>(null);

  const handleMaskClick = (event: any) => {
    if (maskClosable && !modalRef?.current?.contains(event?.target)) {
      onClose && onClose();
    }
  };

  return (
    <div className={cx('modal', maskClass, {hide: !visible})} onClick={(e) => handleMaskClick(e)}>
      <ModalContainer>
        {header === null && null}
        {header && header}
        {!header && (
          <ModalHeader
            title={title}
            onClose={onClose}
            className={headerClass}
          />
        )}
        <div className={cx("flex-1 p-4", bodyClass)}>{children}</div>
        {footer === null && null}
        {footer && footer}
        {!footer && (
          <ModalFooter
            className={footerClass}
            cancelText={cancelText}
            okText={okText}
            onCancel={onCancel}
            onOk={onOk}
          />
        )}
      </ModalContainer>
    </div>
  );
};
