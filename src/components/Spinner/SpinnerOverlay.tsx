import React from "react"

type Props = {
  children: string | React.ReactNode
}

export const SpinnerOverlay = ({children}: Props) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-spinner z-[50]">
      {children}
    </div>
  )
}