import React from 'react'
import { SvgProps } from './types'

export const NodeIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width={53} height={61} viewBox="0 0 53 61" {...props}>
      <title>Node.js</title>
      <path
        fill="none"
        d="M16.76 20.738s.055 17.7.055 24.57c-.173 6.28-6.278 5.748-9.53 3.87C4.033 47.302.5 44.954.5 44.954V16.357L26.294 1.465l25.794 14.892v28.596L26.294 59.845l-7.927-4.577M41.44 25.162c-.118-6.752-17.114-7.217-17.347 0-.233 7.218 18.51 2.91 18.51 10.478 0 7.567-18.743 8.032-19.44.465"
      />
    </svg>
  )
}
