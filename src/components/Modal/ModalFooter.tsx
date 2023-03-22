import React from 'react';
import cx from 'classnames';
import { Button } from '../index';

type Props = {
  className?: string;
  cancelText: string;
  okText: string;
  onCancel?: () => void;
  onOk?: () => void;
}

export const ModalFooter = ({
  className,
  cancelText,
  okText,
  onCancel,
  onOk,
}: Props) => {
  const handleCancel = () => {
    onCancel && onCancel()
  }

  const handleOk = () => {
    onOk && onOk()
  }

  return (
    <div className={cx('h-16 border-t border-bd-modal flex items-center justify-end p-4', className)}>
      <Button buttonType='default' size="large" className="w-24" onClick={() => handleCancel()}>
        {cancelText}
      </Button>
      <Button buttonType='primary' size="large" className="w-24 ml-4" onClick={() => handleOk()}>
        {okText}
      </Button>
    </div>
  )
}