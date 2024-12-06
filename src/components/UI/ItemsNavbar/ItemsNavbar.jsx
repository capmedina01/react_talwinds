import React from 'react'

export const ItemsNavbar = ({text, link}) => {
  return (
    <li className='p-6'><a href={link}></a>{text}</li>
  )
}
