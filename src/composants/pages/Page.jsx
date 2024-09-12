import React from 'react'; 
import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";
import Header  from '../common/Header';
import Home from '../Home/Home';
import { About } from './About';
import { Service } from './Service';
import {Porfolio} from './Porfolio'; 
import { Testimonials } from './Testimonials';
import { Blog } from './Blog';
import { Contact } from './Contact';
import PiedPage from '../common/PiedPage';


export const Page = () => {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index path='/' element ={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Services' element={<Service/>}/>
                <Route path='/Porfolio' element={<Porfolio/>}/>
                <Route path='/Testimonials' element={<Testimonials/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
            <PiedPage/>
        </BrowserRouter>
    </div>
  )
}
