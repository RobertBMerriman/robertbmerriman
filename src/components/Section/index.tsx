import React, { ReactNode } from 'react'
import './index.scss'

interface Props {
  children: ReactNode
}

export const Section = (props: Props) =>
  <div className="section">
    <div style={{ maxWidth: "70%" }}>
      {props.children}
    </div>
  </div>
