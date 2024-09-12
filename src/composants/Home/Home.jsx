import React from 'react'
import { Hero } from './Hero'
import { About } from '../pages/About'
import { Service } from '../pages/Service'
import { Counter } from '../pages/Counter'
import { Porfolio } from '../pages/Porfolio'
import { Testimonials } from '../pages/Testimonials'
import { Blog } from '../pages/Blog'
import { Contact } from '../pages/Contact'
export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
      <Counter/>
      <Porfolio />
      <Testimonials/>
      <Blog/>
      <Contact/>
    </div>
  )
}
