import {Button, Title} from '../index'
import cx from 'classnames'
import React from 'react'

type Props = {
  className?: string;
  title?: string;
  onClose?: () => void;
}

export const ModalHeader = ({
  className,
  title = 'Title',
  onClose,
}: Props) => {

  const handleClose = () => {
    onClose && onClose()
  }

  return (
    <div className={cx('relative h-16 flex justify-center items-center border-b border-bd-modal', className)}>
      <Title level={3}>{title}</Title>
      <Button buttonType='text' className='absolute right-0 text-xl font-semibold' onClick={() => handleClose()}>
        &#10005;
      </Button>
    </div>
  )
}