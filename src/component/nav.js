import React from 'react'
import './css/nav.css'

export default function Navigation(props) {
  return (
    <div className='navigation' >
      <h1>
          {props.title}
      </h1>
    </div>
  )
}
