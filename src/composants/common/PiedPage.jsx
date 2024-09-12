import React from 'react'
import {social} from '../donnee/data'
export default function PiedPage() {
  return (
    <>
    <footer>
      {social.map((item) => (
        <>
          <i >{item.icon}</i>
        </>
      ))}
      <p >All Right Resceved 2018</p>
    </footer>
  </>
  )
}
