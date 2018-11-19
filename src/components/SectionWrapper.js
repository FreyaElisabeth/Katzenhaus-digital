import React from 'react'

export default props => {
  const { children, style, ...shortcuts } = props
  const {
    w: width,
    h: height,
    p: padding,
    m: margin,
    bg: background
  } = shortcuts
  return (
    <section style={{ width, height, padding, margin, background, ...style }}>
      {children}
    </section>
  )
}
