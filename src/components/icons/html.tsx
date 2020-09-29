import React from 'react'
import { SvgProps } from './types'

export const HtmlIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width={48} height={55} viewBox="0 0 48 55" {...props}>
      <title>HTML</title>
      <path
        fill="none"
        d="M35.437 12.205H11.953l1.054 12.75h21.828l-.753 13.575-10.086 3.225-9.935-3.225-.335-4.284m10.273 19.66l-18.817-6L.964.656h46.064l-4.215 47.25-18.817 6"
      />
    </svg>
  )
}
