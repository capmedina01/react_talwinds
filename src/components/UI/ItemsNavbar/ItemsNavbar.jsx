import React from 'react'

export const ItemsNavbar = ({text, link}) => {
  return (
    <li><a href={link}></a>{text}</li>
  )
}
